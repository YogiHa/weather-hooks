import React, { useState } from "react";
import Input from './components/Input';
import APICall from './components/APICall';
import './App.css'
import HistoryItem from './components/HistoryItem';

function App() {
const [location, setLocation] = useState('');
const [list, setList] = useState([]);
const [count, setCount] = useState(0);

const sendLocation = text => {
  setLocation({text}) 
        }
  const updateCount = event => {
     event.preventDefault();
     setCount(count + 1)      
  }
  const updateList = text => {
    const newList = [...list, {text}]
    setList(newList);
  }
  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  const researchItem = (item ,index) => {
   setLocation(item);
   const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  
    return (
      <div className="App">
      <h1> WethWhat? </h1>
          <button id='sel-button' value={count} onClick={updateCount}> Count: {count} </button>
          <h3> i'm working offline! </h3>
          <p> every time you will search a new location, refresh from the search history or even just click me, </p>
          <p> i will update :) </p> <br/>
      <h4> displaying temprture by just clicking enter! </h4>
      <Input sendLocation={sendLocation} />
      <APICall location={location} updateCount={updateCount} updateList={updateList} />
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
     </div> <br /> <br />
     <p> for more information <a href="https://github.com/YogiHa/weather-hooks"> https://github.com/YogiHa/weather-hooks</a> </p>
   
      </div>
    );  }
export default App;
