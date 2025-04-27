import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "vazirmatn/Vazirmatn-font-face.css"; // Import Vazirmatn font

import "./sass/style.scss";

import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./utils/LanguageContext";

// Set default language to Farsi if not already set
try {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'fa');
    document.documentElement.setAttribute('lang', 'fa');
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  }
} catch (error) {
  console.error("Error setting default language:", error);
}

// Fallback component that will render if the main app fails
const FallbackApp = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2EA6F7' }}>Medilo - Medical Service</h1>
      <p>We're experiencing some technical difficulties. Please try again later.</p>
      <div>
        <button 
          onClick={() => window.location.reload()}
          style={{ 
            backgroundColor: '#2EA6F7', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Refresh Page
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div>
          <h3>Language Selection</h3>
          <button onClick={() => { 
            localStorage.setItem('language', 'en'); 
            window.location.reload();
          }} style={{ marginRight: '10px' }}>English</button>
          <button onClick={() => { 
            localStorage.setItem('language', 'fa'); 
            window.location.reload();
          }}>فارسی</button>
        </div>
      </div>
    </div>
  );
};

console.log("Starting application...");

try {
  const rootElement = document.getElementById("root");
  console.log("Root element found:", rootElement);
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  const root = createRoot(rootElement);
  console.log("Root created");
  
  try {
    root.render(
      <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LanguageProvider>
        </React.Suspense>
      </React.StrictMode>
    );
    console.log("Render completed");
  } catch (error) {
    console.error("Error rendering main app:", error);
    // Render fallback if main app fails
    root.render(<FallbackApp />);
  }
} catch (error) {
  console.error("Error during initialization:", error);
  // If we can't even get the root element, try to create fallback directly
  document.body.innerHTML = `
    <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #2EA6F7">Medilo - Medical Service</h1>
      <p>We're experiencing some technical difficulties. Please try refreshing the page.</p>
      <button onclick="window.location.reload()" style="background-color: #2EA6F7; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}