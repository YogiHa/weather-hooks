import React, { useState , useEffect } from "react";

function Display({data}){
    const [unit, setUnit] = useState(data.main.temp);
    const [icon, setIcon] = useState(null);
   
    useEffect(() =>{
              setUnit(data.main.temp);
  if(data.weather[0].main == 'Clouds') {
            setIcon(require('./icons/cloud.png'))
        } else if(data.weather[0].main == 'Rain') {
            setIcon(require('./icons/rain.jpg'))
        }
         else {setIcon(require('./icons/Sun.png'))}
return()=> {isCelzios= true}
    }, [data])

     let isCelzios = true;
    const HandleClick = e => {
      e.preventDefault();
       isCelzios= !isCelzios;
     isCelzios ? setUnit(data.main.temp) :
     setUnit(1.8 * data.main.temp + 32) }

    return <div>
  <article className="mw5 center bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10">
  <div className="tc">
    <img src={icon} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Icon"/>
    <h1 className="f3 mb2">{data.name}</h1>
    <h2 className="f5 fw4 gray mt0">{unit}°</h2>
        <h4 className="f5 fw4 black mt0"> humidity: {data.main.humidity}% </h4>
        <a onClick={HandleClick} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" href="#0">C/F</a>
  </div>
</article>

          </div> }
       

export default Display;


