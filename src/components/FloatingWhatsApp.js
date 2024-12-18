"use client";

import React, { useState } from 'react';
import { 
  FaComments, 
  FaPaperPlane, 
  FaTimes, 
  FaWhatsapp,
  FaComment 
} from 'react-icons/fa';
import Image from "next/image";

const ShiprocketChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Shiprocket Support. How can I assist you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setIsDropdownOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919841014472";
    const message = "Hi, I want to contact you for order";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsDropdownOpen(false);
  };

  const handleResponseClick = (response) => {
    let botResponse = "";
    switch (response) {
      case "I want to subscribe to Shiprocket":
        botResponse = "You can visit our subscription page to subscribe. Would you like me to provide more details about our subscription plans?";
        break;
      case "I'm a current customer of Shiprocket":
        botResponse = "Great! As a current customer, we're here to help. Do you need assistance with shipping, tracking, or something else?";
        break;
      case "I want to track my order":
        botResponse = "Sure, I can help you track your order. Please provide your order ID or tracking number.";
        break;
      case "I'm just browsing":
        botResponse = "Feel free to explore our services. Is there anything specific you'd like to know about Shiprocket?";
        break;
      default:
        botResponse = "I didn't quite catch that. Could you please clarify?";
    }

    setMessages(prevMessages => [
      ...prevMessages,
      { text: response, sender: "user" },
      { text: botResponse, sender: "bot" }
    ]);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    setMessages(prevMessages => [
      ...prevMessages,
      { text: inputMessage, sender: "user" }
    ]);

    const botResponse = "Thank you for your message. Our support team will get back to you soon.";
    
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }
      ]);
    }, 1000);

    setInputMessage("");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-96 bg-white shadow-2xl rounded-xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="font-bold">Shiprocket Support</h2>
            </div>
            <button onClick={handleChatToggle} className="hover:bg-blue-700 p-2 rounded-full">
              <FaTimes />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 max-h-96">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`
                    px-4 py-2 rounded-xl max-w-[80%]
                    ${msg.sender === 'bot' 
                      ? 'bg-gray-200 text-black' 
                      : 'bg-blue-500 text-white'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Response Options */}
          <div className="flex flex-wrap justify-evenly p-2 space-x-2 space-y-2">
            {[
              "I want to subscribe to Shiprocket",
              "I'm a current customer of Shiprocket",
              "I want to track my order",
              "I'm just browsing"
            ].map((response, index) => (
              <button
                key={index}
                onClick={() => handleResponseClick(response)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm"
              >
                {response}
              </button>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex p-4 border-t">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Combined Floating Button with Dropdown */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Main Floating Button */}
          <button 
            onClick={toggleDropdown}
            className="bg-blue-500 p-4 rounded-full text-white shadow-lg hover:bg-blue-600 transition relative z-50"
          >
            <FaComments size={30} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
              <button 
                onClick={handleChatToggle}
                className="w-full flex items-center p-3 hover:bg-gray-100 transition"
              >
                <FaComment className="mr-2" /> Chat Support
              </button>
              <button 
                onClick={openWhatsApp}
                className="w-full flex items-center p-3 hover:bg-gray-100 transition"
              >
                <FaWhatsapp className="mr-2 text-green-500" /> WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiprocketChatbot;