import React from 'react';

function HistoryItem({ item, index, removeItem, researchItem }) {
  return (
    <div>
      {item.text}
      <div>
        <button onClick={() => removeItem(index)}>x</button>
        <button onClick={() => researchItem(item)}>r</button>

      </div>
    </div>
  );
}
export default HistoryItem