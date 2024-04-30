import React, { useState } from 'react';
import './App.css'; // Assurez-vous d'avoir les styles CSS nécessaires pour les effets visuels

const App = () => {
  const [showPrank, setShowPrank] = useState(false);

  const handlePrank = () => {
    setShowPrank(true);
  };

  return (
    <div className="App">
      <h1>OMG BIG SURPRISE !</h1>
      {!showPrank && (
      <button onClick={handlePrank}>Click here to get a surprise !</button>
      )}
      {showPrank && (
        <div className="prank-container">
          <h2 className="prank-text">PRANKED</h2>
          <iframe
            className="prank-video"
            width={1080}
            height={720}
            title="Rick Astley - Never Gonna Give You Up"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1" // Ajoutez les attributs autoplay et loop ici
            allow="autoplay; fullscreen"
          />
        </div>
      )}
    </div>
  );
};

export default App;
