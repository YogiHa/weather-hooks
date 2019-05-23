import React, {useState} from 'react';

function Input({sendLocation, addItem}){
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; 
    sendLocation(value);
    setValue("");  };
     return (
    
    <form onSubmit={handleSubmit}>
      <input
      aria-label= 'type here'
       placeholder='search by city name'
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit </button>
    </form>);};

    export default Input;