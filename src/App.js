import React, { useState } from 'react';
import './App.css'; // You can create this CSS file for styling

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Responsive Paragraph Word Counter</h1>
      </header>
      <main>
        <textarea
          className="text-box"
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
        />
        <p className="word-count">Word Count: {wordCount}</p>
      </main>
    </div>
  );
}

export default App;