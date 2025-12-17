import React from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <div className="heading-content">
          <span className="logo">🔧 PartSelect</span>
          <span className="subtitle">AI Chat Assistant</span>
        </div>
      </div>
      <ChatWindow/>
    </div>
  );
}

export default App;
