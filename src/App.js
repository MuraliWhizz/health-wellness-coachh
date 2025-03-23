import React, { useEffect } from 'react';
import Header from './components/Header.js';
import WelcomeMessage from './components/WelcomeMessage';
import BackgroundAnimations from './components/BackgroundAnimations.js';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Load Voiceflow chat widget
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.async = true;
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66cd3c1623b6c24cc9d55fa7' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });

      // Automatically open the chat after 3 seconds
      setTimeout(() => {
        window.voiceflow.chat.open();
      }, 3000);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <BackgroundAnimations />
      <div className="content">
        <Header />
        <WelcomeMessage />
      </div>
    </div>
  );
}

export default App;