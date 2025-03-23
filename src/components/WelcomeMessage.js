import React from 'react';

function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <p>Your personal health journey begins here. The chat will open automatically to start your assistance.</p>
      <div className="pulse-icon">
        <span>&#128172;</span>
      </div>
    </div>
  );
}

export default WelcomeMessage;
