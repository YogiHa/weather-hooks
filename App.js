import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';

function Input({sendLocation}){
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

function Dispaly({data}){
	if(data.base === 'stations'){
    const [unit, setUnit] = useState(data.main.temp)
    useEffect(() =>{
setUnit(data.main.temp);
return()=> {isCelzios= true}
    }, [data])
     let isCelzios = true;
    const HandleClick = e => {
      e.preventDefault();
       isCelzios= !isCelzios;
     (!isCelzios) ? setUnit(1.8 * data.main.temp + 32) :
     setUnit(data.main.temp) }  
		return <div>
    <h1>{data.name} </h1>
    <div> <h2>{unit}° </h2>
      <button onClick={HandleClick} >C/F</button> </div>
    <h3> humidity: {data.main.humidity}% </h3>
      </div>    }
    	 else
{return <div> waiting for searches </div>}}

function Forcast({location}){
	let ignore = false;
	const [data, setData] = useState([])
	const apiKey = 'd2cb9ea67b28bb32949f13c1ffb2b803';
	useEffect(()=> {
		async function fetchData() {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location.text}&units=metric&appid=${apiKey}`)
	  if (!ignore) setData(result.data);    }
    if (location.text === undefined) {
    	return () => {ignore = false}    }
	 else {fetchData();
    return () => { ignore = true; }	}}, [location])
return (<Dispaly data={data}/>) }

function App() {
const [location, setLocation] = useState('');
const sendLocation = text => {
	const requestLoc= {text}
	setLocation(requestLoc) }
    return (
      <div className="App">
      <Input sendLocation={sendLocation} />
      <Forcast location={location}  />
      </div>
    );  }
export default App;
