import React from 'react';
import EmotionDetector from './components/EmotionDetector'; // Importing the component

function App() {
  const containerStyle = {
    height: '100vh',               // Full screen height
    display: 'flex',              // Flexbox for layout
    justifyContent: 'center',     // Horizontally center content
    alignItems: 'flex-start',     // Top-align content
    paddingBottom: '40px',        // Bottom padding
    textAlign: 'center'           // Center align text
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>Emotion-Aware UX Feedback</h1>

        {/* This line activates the webcam + emotion detector */}
        <EmotionDetector />

      </div>
    </div>
  );
}

export default App;
