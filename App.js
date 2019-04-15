import React, { useState } from "react";
import "./App.css";
import Input from './components/Input';
import APICall from './components/APICall';
import HistoryItem from './components/HistoryItem';

function App() {
const [location, setLocation] = useState('');
const [list, setList] = useState([]);

const sendLocation = text => {
	const requestLoc= {text}
	setLocation(requestLoc) 
  const newList = [...list, {text}]
    setList(newList);
  }
  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
    return (
      <div className="App">
      <Input sendLocation={sendLocation}/>
      <APICall location={location}  />
      <div>
     {list.map((list, index) => (
          <HistoryItem
            key={index}
            index={index}
            item={list}
            removeItem={removeItem}
          />
        ))}
     </div>
      </div>
    );  }
export default App;
