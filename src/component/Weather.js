import React from 'react'
import { useState,useEffect } from 'react'
import { getWeatherUpdates } from '../utils/api'
import "./Weather.css"


export const GetWeather = () => {

const [weather, setWeather] = useState({

    city:"",
    temp:"",
    icon:"",
    desc:''

})

useEffect(() => {

    getWeatherUpdates(setWeather)
}, [])

  return (
    <div className='weather-container'>
     <div className='weather-content'>
       <h4>{weather.temp}</h4>
        <h4>{weather.city}</h4>
        {/* <h4>{weather.icon}</h4> */}
        <h4>{weather.desc}</h4>
     </div>
    </div>
  )
}
