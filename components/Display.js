import React, { useState , useEffect } from "react";

function Display({data}){
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

export default Display;