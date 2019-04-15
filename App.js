import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';

function Input({sendLocation}){
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    sendLocation(value);
    setValue("");
  };
     return (
    <form onSubmit={handleSubmit}>
      <input
       placeholder='search by city name'
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>

  );
};
function Degree({degree}) {
 const [unit, setUnit] = useState(degree)
 let celzios = true;
    const HandleClick = e => {
      e.preventDefault();
       celzios= !celzios
     if(!celzios){setUnit(1.8 * degree + 32)}
      else{setUnit(degree)}
    
     
    }  
  //  
  return <div> <h2>{unit}° </h2>
      <button onClick={HandleClick} >C/F</button> </div>
}
function Dispaly({data}){
	if(data.base === 'stations'){
		return <div>
    <h1>{data.name} </h1>
    <Degree degree={data.main.temp}/>
    <h3> humidity: {data.main.humidity}% </h3>
      </div>
    }
    
	 else
{return <div> waiting for searches </div>}
}

function Forcast({location}){
	let ignore = false;
	const [data, setData] = useState([])
	const apiKey = //APIKey;
	useEffect(()=> {
		async function fetchData() {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location.text}&units=metric&appid=${apiKey}`)
	  if (!ignore) setData(result.data);
    }
    if (location.text === undefined) {
    	return () => {ignore = false}
    }
	 else {fetchData();
    return () => { ignore = true; }
	}}, [location])
return (<Dispaly data={data}/>)
}

function App() {
const [location, setLocation] = useState('');
const sendLocation = text => {
	const requestLoc= {text}
	setLocation(requestLoc)
}


    return (
      <div className="App">
      <Input sendLocation={sendLocation} />
      <Forcast location={location}  />
      </div>
    );
  
}

export default App;
