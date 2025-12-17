# PartSelect AI Chat Agent - Case Study

A sophisticated AI-powered chat agent for the PartSelect e-commerce platform, specializing in refrigerator and dishwasher parts. This solution provides intelligent product recommendations, compatibility checking, installation guidance, and troubleshooting support.

## Project Overview

### Example Queries Supported

- "How can I install part number PS11752778?"
- "Is this part compatible with my WDT780SAEM1 model?"
- "The ice maker on my Whirlpool fridge is not working. How can I fix it?"
- "Show me water filters for refrigerators"
- "I need a heating element for my dishwasher"

## Architecture

### Frontend (React)
- **Framework**: React 18 with modern hooks
- **Styling**: Custom CSS with responsive design
- **State Management**: React useState/useEffect
- **API Integration**: Fetch API for backend communication
- **UI Components**:
  - `ChatWindow`: Main chat interface with message history
  - `ProductCard`: Rich product display with specs, pricing, and ratings
  - Typing indicators and loading states
  - Quick action buttons for common queries

### Backend (Node.js + Express)
- **Framework**: Express.js REST API
- **AI Integration**: Google Gemini api
- **Data Storage**: In-memory JavaScript objects (easily extensible to database)
- **Core Components**:
  - Product search and filtering
  - Compatibility validation
  - Troubleshooting knowledge base
  - Context-aware AI responses

### Data Models

#### Products Database
```javascript
{
  partNumber: "PS11752778",
  name: "Ice Maker Assembly",
  category: "Refrigerator",
  subcategory: "Ice Maker",
  brand: "Whirlpool",
  description: "Complete ice maker assembly...",
  price: 89.99,
  inStock: true,
  rating: 4.5,
  reviews: 324,
  specifications: {...},
  installationDifficulty: "Moderate",
  installationTime: "30-45 minutes",
  warrantyMonths: 12
}
```

#### Compatibility Data
```javascript
{
  "PS11752778": {
    compatibleModels: ["WDT780SAEM1", "WRF555SDFZ00", ...],
    brandCompatibility: ["Whirlpool", "Maytag", "KitchenAid"],
    notes: "Compatible with most Whirlpool side-by-side..."
  }
}
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Google API key (for Gemini AI) - Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Installation

1. **Clone the repository**
```bash
cd Instalily-AI/case-study
```

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd backend
npm install
```

4. **Configure Environment Variables**
```bash
cd backend
```

Create a `.env` file in the `backend` directory:

```env
GOOGLE_API_KEY=your-google-api-key-here
PORT=5000
NODE_ENV=development
```

5. **Start the Backend Server**
```bash
cd backend
npm start
# Server will run on http://localhost:5000
```

6. **Start the Frontend (in a new terminal)**
```bash
cd Instalily-AI/case-study
npm start
# React app will open at http://localhost:3000
```

## API Documentation

### Endpoints

#### `POST /api/chat`
Main chat endpoint for AI interactions.

**Request:**
```json
{
  "message": "How do I install PS11752778?",
  "conversationHistory": [...]
}
```

**Response:**
```json
{
  "role": "assistant",
  "content": "Here's how to install the ice maker...",
  "products": [...]
}
```

#### `GET /api/products`
Get all products with optional filtering.

**Query Parameters:**
- `category`: Filter by category (Refrigerator/Dishwasher)
- `search`: Search term for product lookup

#### `GET /api/products/:partNumber`
Get specific product by part number.

#### `POST /api/compatibility`
Check part compatibility with a model.

**Request:**
```json
{
  "partNumber": "PS11752778",
  "modelNumber": "WDT780SAEM1"
}
```

## Design Decisions

### User Experience
- **Conversational Interface**: Natural language interactions reduce friction
- **Visual Product Cards**: Rich product information displayed inline in chat
- **Quick Actions**: Common queries accessible with one click
- **Loading States**: Clear feedback during AI processing
- **Responsive Design**: Works seamlessly on desktop and mobile

### AI Agent Design
- **Focused Scope**: Deliberately limited to refrigerator/dishwasher parts
- **Context Awareness**: Maintains conversation history for better responses
- **Product Integration**: Automatically displays relevant products in responses
- **Knowledge Base**: Combines structured data with AI reasoning

### Extensibility
- **Modular Architecture**: Easy to add new product categories
- **Database-Ready**: Data models designed for easy migration to SQL/NoSQL
- **API-First Design**: Backend can support multiple frontends
- **Component Reusability**: React components are self-contained and reusable

## Scalability Considerations

### Current Implementation
- In-memory data storage (15+ products, compatibility data, troubleshooting guides)
- Single-instance Express server
- Client-side state management

### Production Recommendations

1. **Database Integration**
   - PostgreSQL for relational product data
   - Redis for session management and caching
   - Elasticsearch for advanced product search

2. **AI Enhancements**
   - Vector database (Pinecone/Weaviate) for semantic product search
   - RAG (Retrieval Augmented Generation) for installation manuals
   - Fine-tuned model for appliance-specific queries

3. **Infrastructure**
   - Load balancing for multiple backend instances
   - CDN for static assets and product images
   - Message queue (RabbitMQ) for async AI processing

4. **Features to Add**
   - User authentication and order history
   - Shopping cart integration
   - Real-time inventory updates
   - Multi-language support
   - Image upload for visual part identification

## Success Metrics

### Implemented Features
✅ Natural language product search  
✅ Part number lookup and compatibility checking  
✅ Installation instructions and difficulty ratings  
✅ Troubleshooting guidance for common issues  
✅ Rich product cards with specifications  
✅ Responsive, branded UI  
✅ Context-aware conversations  
✅ Quick action suggestions  

### Evaluation Criteria Met
- **Interface Design**: Modern, clean UI aligned with e-commerce best practices
- **Agentic Architecture**: Context-aware AI with structured knowledge integration
- **Extensibility**: Modular design, easy to add categories/features
- **Accuracy**: Structured data ensures correct product information
- **Efficiency**: Fast responses with optimized API calls

## Technologies Used

### Frontend
- React 18
- Marked (Markdown parsing)
- CSS3 with Flexbox/Grid
- Fetch API

### Backend
- Node.js
- Express.js
- Google Gemini Pro API
- CORS middleware

### Development Tools
- Create React App
- Nodemon (hot reload)
- ESLint

## Future Enhancements

1. **Enhanced Product Discovery**
   - Visual part identification via image upload
   - AR view for installation preview
   - Video tutorials integration

2. **Personalization**
   - Saved appliances and preferences
   - Purchase history integration
   - Proactive maintenance reminders

3. **Advanced AI Features**
   - Multi-turn diagnostic workflows
   - Sentiment analysis for customer support routing
   - Predictive part failure analysis

4. **Business Integration**
   - Real-time inventory checking
   - Dynamic pricing
   - Order tracking within chat
   - Warranty claim assistance

### Project Structure
```
case-study/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   │   ├── ChatWindow.js
│   │   ├── ProductCard.js
│   │   └── *.css
│   ├── api/               # API integration
│   ├── App.js
│   └── index.js
├── backend/               # Backend server
│   ├── server.js         # Express app
│   ├── data/             # Data models
│   │   ├── products.js
│   │   ├── compatibility.js
│   │   └── troubleshooting.js
│   └── package.json
├── public/               # Static assets
└── README.md            # This file
```