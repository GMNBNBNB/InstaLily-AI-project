import React, { useState, useEffect, useRef } from "react";
import "./ChatWindow.css";
import { getAIMessage } from "../api/api";
import { marked } from "marked";
import ProductCard from "./ProductCard";

function ChatWindow() {

  const defaultMessage = [{
    role: "assistant",
    content: "👋 Welcome to PartSelect! I'm here to help you find the perfect parts for your refrigerator or dishwasher.\n\nI can help you with:\n- Finding parts by part number or description\n- Checking compatibility with your appliance model\n- Installation instructions and troubleshooting\n- Product recommendations\n\nHow can I assist you today?"
  }];

  const [messages, setMessages] = useState(defaultMessage);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
      scrollToBottom();
  }, [messages]);

  const handleSend = async (inputText) => {
    if (inputText.trim() !== "" && !isLoading) {
      // Set user message
      const userMessage = { role: "user", content: inputText };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput("");
      setIsLoading(true);

      // Get conversation history (last 10 messages for context)
      const conversationHistory = messages.slice(-10);

      // Call API & set assistant message
      const response = await getAIMessage(inputText, conversationHistory);
      setMessages(prevMessages => [...prevMessages, response]);
      setIsLoading(false);
    }
  };

  const renderMessageContent = (message) => {
    let content = message.content;
    const products = message.products || [];

    // Convert markdown to HTML
    let html = marked(content).replace(/<p>|<\/p>/g, "");

    return (
      <>
        <div dangerouslySetInnerHTML={{__html: html}} />
        {products && products.length > 0 && (
          <div className="products-in-message">
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        )}
      </>
    );
  };

  const quickActions = [
    "How do I install part PS11752778?",
    "Is PS11752778 compatible with WDT780SAEM1?",
    "Ice maker not working - help!",
    "Show me water filters"
  ];

  const handleQuickAction = (action) => {
    setInput(action);
  };

  return (
      <div className="chat-window-container">
          <div className="messages-container">
              {messages.map((message, index) => (
                  <div key={index} className={`${message.role}-message-container`}>
                      {message.content && (
                          <div className={`message ${message.role}-message`}>
                              {renderMessageContent(message)}
                          </div>
                      )}
                  </div>
              ))}
              {isLoading && (
                  <div className="assistant-message-container">
                      <div className="message assistant-message">
                          <div className="typing-indicator">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
              <div className="quick-actions">
                  <div className="quick-actions-title">Quick Actions:</div>
                  <div className="quick-actions-buttons">
                      {quickActions.map((action, idx) => (
                          <button
                              key={idx}
                              className="quick-action-btn"
                              onClick={() => handleQuickAction(action)}
                          >
                              {action}
                          </button>
                      ))}
                  </div>
              </div>
          )}

          <div className="input-area">
              <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about parts, installation, or troubleshooting..."
                  onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                          handleSend(input);
                          e.preventDefault();
                      }
                  }}
                  disabled={isLoading}
              />
              <button 
                  className="send-button" 
                  onClick={() => handleSend(input)}
                  disabled={isLoading || input.trim() === ""}
              >
                  {isLoading ? "..." : "Send"}
              </button>
          </div>
      </div>
  );
}

export default ChatWindow;
