import React, { useState } from "react";
import Input from './components/Input';
import APICall from './components/APICall';
import './App.css'
import HistoryItem from './components/HistoryItem';

function App() {
const [location, setLocation] = useState('');
const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const handleClick = e => {
    e.preventDefault();
    setCount(count + 1)
  }
const sendLocation = text => {
  setLocation({text}) 
  const newList = [...list, {text}]
    setList(newList);
           
  }
  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  const researchItem = index => {
setLocation(index)
  }
    return (
      <div className="App">
      <h1> WethWhat? </h1>
          <button onClick={handleClick}> Count: {count} </button>
          <p> i'm working offline! </p>
      <h4> displaying temprture by just clicking enter! </h4>
      <Input sendLocation={sendLocation} />
      <APICall location={location}  />
      <div>
     {list.map((list, index) => (
          <HistoryItem
            key={index}
            index={index}
            item={list}
            removeItem={removeItem}
            researchItem={researchItem}
          />
        ))}
     </div>
   
      </div>
    );  }
export default App;
