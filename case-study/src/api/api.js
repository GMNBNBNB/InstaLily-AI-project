const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAIMessage = async (userQuery, conversationHistory = []) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userQuery,
        conversationHistory: conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching AI message:', error);
    return {
      role: "assistant",
      content: "I apologize, but I'm having trouble connecting to the server. Please make sure the backend is running on port 5000.",
      error: true
    };
  }
};

export const getProducts = async (category = null, search = null) => {
  try {
    let url = `${API_BASE_URL}/products`;
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProduct = async (partNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${partNumber}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const checkCompatibility = async (partNumber, modelNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/compatibility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ partNumber, modelNumber })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking compatibility:', error);
    return null;
  }
};
