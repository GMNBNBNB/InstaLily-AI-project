const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const productsData = require('./data/products');
const compatibilityData = require('./data/compatibility');
const troubleshootingData = require('./data/troubleshooting');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// Helper function to search products
function searchProducts(query, category = null) {
  const lowerQuery = query.toLowerCase();
  return productsData.filter(product => {
    const matchesQuery = 
      product.partNumber.toLowerCase().includes(lowerQuery) ||
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    
    const matchesCategory = !category || product.category === category;
    
    return matchesQuery && matchesCategory;
  });
}

// Helper function to get product by part number
function getProductByPartNumber(partNumber) {
  return productsData.find(p => 
    p.partNumber.toLowerCase() === partNumber.toLowerCase()
  );
}

// Helper function to check compatibility
function checkCompatibility(partNumber, modelNumber) {
  const compatibility = compatibilityData[partNumber];
  if (!compatibility) return null;
  
  return {
    isCompatible: compatibility.compatibleModels.some(model => 
      model.toLowerCase().includes(modelNumber.toLowerCase())
    ),
    models: compatibility.compatibleModels
  };
}

// Helper function to get troubleshooting advice
function getTroubleshootingAdvice(issue, appliance) {
  const key = `${appliance}_${issue}`.toLowerCase();
  return troubleshootingData[key] || null;
}

// System prompt for the AI agent
const SYSTEM_PROMPT = `You are a helpful chat assistant for PartSelect, an e-commerce website specializing in appliance parts. You help customers find the right parts for their refrigerators and dishwashers.

Your responsibilities:
1. Help customers find parts by part number, name, or issue description
2. Check compatibility between parts and appliance models
3. Provide installation instructions and troubleshooting advice
4. Answer questions about product specifications
5. Assist with ordering information

Important guidelines:
- Stay focused on refrigerator and dishwasher parts only
- Be friendly, professional, and concise
- If a customer asks about something outside your scope (other appliances, unrelated topics), politely redirect them
- When showing products, use the [PRODUCT:part_number] tag so the frontend can render product cards
- When you have multiple relevant products, show up to 3 at a time
- Always verify part numbers and model numbers carefully

Available tools:
- searchProducts(query, category): Search for parts
- getProductByPartNumber(partNumber): Get specific product details
- checkCompatibility(partNumber, modelNumber): Check if a part works with a model
- getTroubleshootingAdvice(issue, appliance): Get troubleshooting steps

Remember: Your goal is to help customers find the right parts quickly and confidently.`;

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    // Process the message to extract potential queries
    const products = extractAndSearchProducts(message);
    const compatibility = extractCompatibilityCheck(message);
    const troubleshooting = extractTroubleshooting(message);

    // Build context for the AI
    let context = '';
    
    if (products.length > 0) {
      context += '\n\nRelevant products found:\n';
      products.forEach(p => {
        context += `- ${p.name} (${p.partNumber}): ${p.description}\n  Price: $${p.price}\n  Category: ${p.category}\n`;
      });
    }

    if (compatibility) {
      context += '\n\nCompatibility information:\n';
      context += `Part ${compatibility.partNumber} is ${compatibility.isCompatible ? 'compatible' : 'not compatible'} with model ${compatibility.modelNumber}.\n`;
      if (compatibility.models) {
        context += `Compatible models: ${compatibility.models.slice(0, 5).join(', ')}${compatibility.models.length > 5 ? '...' : ''}\n`;
      }
    }

    if (troubleshooting) {
      context += '\n\nTroubleshooting information:\n';
      context += troubleshooting;
    }

    // Prepare chat history for Gemini
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    // Build the complete prompt with system instructions and context
    const fullPrompt = `${SYSTEM_PROMPT}\n\n${message}${context ? `\n\nContext:${context}` : ''}`;

    // Call Gemini API
    const result = await chat.sendMessage(fullPrompt);
    const response = await result.response;
    const assistantMessage = response.text();

    // Extract product tags and enrich response
    const enrichedResponse = enrichResponseWithProducts(assistantMessage, products);

    res.json({
      role: 'assistant',
      content: enrichedResponse,
      products: products.slice(0, 3) // Send top 3 products
    });

  } catch (error) {
    console.error('Error processing chat:', error);
    res.status(500).json({
      role: 'assistant',
      content: 'I apologize, but I encountered an error. Please try again.',
      error: error.message
    });
  }
});

// Helper function to extract and search for products
function extractAndSearchProducts(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for part numbers (format: PS followed by numbers)
  const partNumberMatch = message.match(/PS\d+/gi);
  if (partNumberMatch) {
    const product = getProductByPartNumber(partNumberMatch[0]);
    if (product) return [product];
  }

  // Search for common keywords
  const keywords = ['ice maker', 'water filter', 'door seal', 'thermostat', 
                   'compressor', 'rack', 'spray arm', 'heating element', 
                   'pump', 'valve', 'control board', 'gasket'];
  
  for (const keyword of keywords) {
    if (lowerMessage.includes(keyword)) {
      return searchProducts(keyword).slice(0, 3);
    }
  }

  return [];
}

// Helper function to extract compatibility check requests
function extractCompatibilityCheck(message) {
  const partNumberMatch = message.match(/PS\d+/gi);
  const modelMatch = message.match(/[A-Z]{3,}\d+[A-Z]?\d*/gi);
  
  if (partNumberMatch && modelMatch) {
    const result = checkCompatibility(partNumberMatch[0], modelMatch[0]);
    if (result) {
      return {
        partNumber: partNumberMatch[0],
        modelNumber: modelMatch[0],
        ...result
      };
    }
  }
  
  return null;
}

// Helper function to extract troubleshooting requests
function extractTroubleshooting(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('not working') || lowerMessage.includes('fix') || lowerMessage.includes('broken')) {
    if (lowerMessage.includes('ice maker')) {
      const advice = getTroubleshootingAdvice('ice_maker', 'refrigerator');
      return advice;
    }
    if (lowerMessage.includes('not cooling') || lowerMessage.includes('warm')) {
      const advice = getTroubleshootingAdvice('not_cooling', 'refrigerator');
      return advice;
    }
    if (lowerMessage.includes('dishwasher') && lowerMessage.includes('not cleaning')) {
      const advice = getTroubleshootingAdvice('not_cleaning', 'dishwasher');
      return advice;
    }
  }
  
  return null;
}

// Helper function to enrich response with product tags
function enrichResponseWithProducts(text, products) {
  let enriched = text;
  
  products.forEach(product => {
    const partNumberRegex = new RegExp(`\\b${product.partNumber}\\b`, 'gi');
    enriched = enriched.replace(partNumberRegex, `[PRODUCT:${product.partNumber}]`);
  });
  
  return enriched;
}

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  
  let filtered = productsData;
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (search) {
    filtered = searchProducts(search);
  }
  
  res.json(filtered);
});

// Endpoint to get specific product
app.get('/api/products/:partNumber', (req, res) => {
  const product = getProductByPartNumber(req.params.partNumber);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Endpoint to check compatibility
app.post('/api/compatibility', (req, res) => {
  const { partNumber, modelNumber } = req.body;
  
  const result = checkCompatibility(partNumber, modelNumber);
  
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'Compatibility information not found' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`PartSelect Chat Agent Backend running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
