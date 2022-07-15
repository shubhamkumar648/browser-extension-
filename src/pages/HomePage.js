import React from 'react'
import { CoverImage } from '../component'
import { GetWeather } from '../component/Weather'

export const HomePage = () => {
  return (
    <div className='Home-container'>

        <GetWeather/>
        <CoverImage/>

    </div>
  )
}
