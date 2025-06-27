import React from 'react';

function App() {
  const containerStyle = {
    height: '100vh',               // Full height of the screen
    display: 'flex',              // Use Flexbox
    justifyContent: 'center',     // Center horizontally
    alignItems: 'flex-start',       // Push content to the top
    paddingBottom: '40px',        // Add spacing from bottom
    textAlign: 'center'           // Center text
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>Emotion-Aware UX Feedback</h1>
      </div>
    </div>
  );
}

export default App;
