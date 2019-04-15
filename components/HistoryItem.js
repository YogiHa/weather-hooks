import React from 'react';

function HistoryItem({ item, index, removeItem }) {
  return (
    <div>
      {item.text}
      <div>
        <button onClick={() => removeItem(index)}>x</button>
      </div>
    </div>
  );
}
export default HistoryItem