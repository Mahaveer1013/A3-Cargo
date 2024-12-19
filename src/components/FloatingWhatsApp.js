"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaComments, 
  FaPaperPlane, 
  FaTimes, 
  FaWhatsapp,
  FaComment,
  FaRobot,
  FaUser,
  FaRegSmile,
  FaPaperclip,
  FaMinus,
  FaArrowLeft
} from 'react-icons/fa';

const ShiprocketChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hello! Welcome to Shiprocket Support. How can I assist you today?", 
      sender: "bot" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setIsDropdownOpen(false);
  };

  const handleClose = () => {
    setIsChatOpen(false);
    setIsDropdownOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919841014472";
    const message = "Hi, I want to contact you for order";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsDropdownOpen(false);
  };

  const quickResponses = [
    {
      text: "Subscribe to Shiprocket",
      response: "You can visit our subscription page to subscribe. Would you like me to provide more details about our subscription plans? 🚀"
    },
    {
      text: "Current Customer",
      response: "Great! As a current customer, we're here to help. Do you need assistance with shipping, tracking, or something else? 📦"
    },
    {
      text: "Track Order",
      response: "Sure, I can help you track your order. Please provide your order ID or tracking number. 🔍"
    },
    {
      text: "Just Browsing",
      response: "Feel free to explore our services. Is there anything specific you'd like to know about Shiprocket? 👀"
    }
  ];

  const handleResponseClick = (response) => {
    setMessages(prev => [...prev, { text: response.text, sender: "user" }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: response.response, sender: "bot" }]);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    setMessages(prev => [...prev, { text: inputMessage, sender: "user" }]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our support team will get back to you soon. ✨",
        sender: "bot"
      }]);
    }, 1500);
  };

  return (
    <div className="font-sans">
      {isChatOpen && (
        <div 
          className={`fixed bg-white shadow-2xl flex flex-col transition-all duration-300 z-50
            ${isMobile 
              ? 'inset-0' 
              : 'bottom-24 right-8 w-96 max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200'}`}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center relative">
            <div className="flex items-center space-x-3">
              {isMobile && (
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-blue-500 rounded-full transition-colors"
                >
                  <FaArrowLeft size={20} />
                </button>
              )}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <FaRobot className="text-blue-600 text-xl" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Shiprocket Support</h2>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-xs text-blue-100">Online | Ready to help</p>
                </div>
              </div>
            </div>
            {!isMobile && (
              <button 
                onClick={handleClose}
                className="hover:bg-blue-500 p-2 rounded-full transition-colors"
              >
                <FaTimes size={20} />
              </button>
            )}
          </div>

          {/* Message Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 custom-scrollbar">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex items-end space-x-2 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
                    <FaRobot className="text-blue-600 text-sm" />
                  </div>
                )}
                <div 
                  className={`
                    px-4 py-3 rounded-2xl max-w-[70%] shadow-sm
                    ${msg.sender === 'bot' 
                      ? 'bg-white text-gray-800 rounded-bl-none' 
                      : 'bg-blue-600 text-white rounded-br-none'}
                  `}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaUser className="text-white text-sm" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaRobot className="text-blue-600 text-sm" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Response Options */}
          <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 border-t border-gray-100">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleResponseClick(response)}
                className="px-3 py-2 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition text-sm font-medium shadow-sm border border-gray-100 hover:border-blue-200"
              >
                {response.text}
              </button>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <div className="flex-grow flex items-center space-x-2 p-2 border rounded-xl focus-within:ring-2 focus-within:ring-blue-500 bg-gray-50">
                <input 
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 bg-transparent focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <FaRegSmile />
                </button>
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <FaPaperclip />
                </button>
              </div>
              <button 
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[48px] shadow-md hover:shadow-lg"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={handleChatToggle}
        className={`fixed z-50 bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 group
          ${isMobile ? 'bottom-6 right-6' : 'bottom-8 right-8'}`}
      >
        {isChatOpen ? (
          <FaTimes size={24} className="group-hover:scale-110 transition-transform" />
        ) : (
          <FaComments size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default ShiprocketChatbot;