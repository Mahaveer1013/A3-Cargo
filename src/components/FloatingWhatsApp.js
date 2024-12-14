"use client";

import Image from "next/image";
import React from "react";

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+919841014472"; // Replace with your phone number
    const message = "Hi, I want to contact you for order"; // Customize the message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };

  return (
    <div className="text-center p-5">
      <div
        className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110"
        onClick={openWhatsApp}
      >
        <Image
          src="/WhatsApp.svg"
          alt="WhatsApp Logo"
          className="w-9 h-9"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
