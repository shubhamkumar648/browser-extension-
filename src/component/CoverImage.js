import React from 'react'
import { useEffect,useState } from 'react'
import { getImage } from '../utils/api'
import { Currtime } from './Currtime'



export const CoverImage = () => {

  const [image, setImage] = useState({
    url: "",
  location: "",
  description: "",});

  const { url, location, description } = image;

  useEffect(() => {

    getImage(setImage)
    
  },[])
  
  return (
    <div className='coverImage-mainContainer flex'>

    <div className='currTime-container'>
    <Currtime/>
    <h3>{location}</h3>

    </div>

<img src={url} alt={description} className="img_responsive"/>

    </div>
    


  )
}
