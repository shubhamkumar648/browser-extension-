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
       <h4 className='font-xl '>{weather.temp}</h4>
        <small className='font-xl '> {weather.city}</small>
        <small className='font-xl '>{weather.desc}</small>

     </div>
  )
}
