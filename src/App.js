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
  const updateCount = text => {
     setCount(count + 1)      
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
          <h3> i'm working offline! </h3>
          <p> every time you will search a new location, refresh from the search history or even just click me, </p>
          <p> i will update :) </p> <br/>
      <h4> displaying temprture by just clicking enter! </h4>
      <Input sendLocation={sendLocation} />
      <APICall location={location} updateCount={updateCount} />
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
