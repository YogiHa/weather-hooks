import React, { useState , useEffect } from "react";
import axios from 'axios';
import Display from './Display';

function APICall({location}){
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
return (<Display data={data}/>) }

export default APICall;