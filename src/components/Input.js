import React, {useState} from 'react';

function Input({sendLocation, addItem}){
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    sendLocation(value);
    setValue("");  };
     return (
    <form onSubmit={handleSubmit}>
      <input
       placeholder='search by city name'
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>  );};

    export default Input;