import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedBoxes, setClickedBoxes] = useState(new Set());
  const [clickOrder, setClickOrder] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const handleClick = (position) => {
    if (isComplete) return;
    const newClickedBoxes = new Set(clickedBoxes);
    if (!newClickedBoxes.has(position)) {
      newClickedBoxes.add(position);
      setClickedBoxes(newClickedBoxes);
      setClickOrder([...clickOrder, position]);
    }
    if (position === 9) {
      setIsComplete(true);
      animateOrangeSequence(newClickedBoxes);
    }
  };

  const animateOrangeSequence = (boxes) => {
    const boxArray = Array.from(boxes);
    boxArray.forEach((pos, index) => {
      setTimeout(() => {
        document.getElementById(`box-${pos}`).style.backgroundColor = 'orange';
      }, index * 500);
    });
  };

  const resetMatrix = () => {
    setClickedBoxes(new Set());
    setClickOrder([]);
    setIsComplete(false);
  };

  const reverseLastClick = () => {
    if (clickOrder.length === 0 || isComplete) return;
    const newClickOrder = [...clickOrder];
    const lastClicked = newClickOrder.pop();
    const newClickedBoxes = new Set(newClickOrder);
    setClickedBoxes(newClickedBoxes);
    setClickOrder(newClickOrder);
  };

  const getBoxStyle = (position) => {
    return {
      backgroundColor: clickedBoxes.has(position) ? 'green' : 'white',
      transition: 'background-color 0.3s',
    };
  };

  return (
    <div className="app-container">
      
      <div className="explanation-panel">
        <h1 className="app-title">Matrix Color Changer</h1>
        <ul className="instructions">
          <li>Click the boxes in sequence</li>
          <li>Boxes turn green when clicked</li>
          <li>Complete the sequence to see the animation that is orange color in order of the boxes clicked</li>
          <li>Reset - Original State of the Matrix is restored that is no color in matrix, you can recolor</li>
          <li>Reverse - Forget the immediate previous box clicked</li>
        </ul>
      </div>
      

      <main className="main-content">
        <div className="matrix-container">
          <div className="matrix-wrapper">
            {matrix.map((row, rowIndex) => (
              <div key={rowIndex} className="matrix-row">
                {row.map((position) => (
                  <div
                    key={position}
                    id={`box-${position}`}
                    className="matrix-box"
                    onClick={() => handleClick(position)}
                    style={getBoxStyle(position)}
                  >
                    {position}
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="controls-container">
            <button className="btn reset-btn" onClick={resetMatrix}>
              Reset
            </button>
            <button className="btn reverse-btn" onClick={reverseLastClick}>
              Reverse
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;