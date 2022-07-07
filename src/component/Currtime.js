import React from 'react'
import { useState,useEffect } from 'react';

export const Currtime = () => {

    const [date, setDate] = useState(new Date())

    const dayArr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    const hours = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()
    
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()

    const day = dayArr[date.getDay() - 1 ];

    useEffect(() => {

        setDate(new Date())
    },[])

  return (
    <div>
    
    <h1> {hours}: {minutes} </h1>
      <h3> {day} </h3>
    </div>
  )
}
