import React from 'react'
import { useEffect,useState } from 'react'
import { getImage } from '../utils/api'

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
    <div>

<img src={url} alt={description} className="img_responsive"/>
<p>{location}</p>

    </div>
    


  )
}
