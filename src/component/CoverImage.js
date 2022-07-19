import React from "react";
import { useEffect, useState } from "react";
import { getImage } from "../utils/api";
import { Currtime } from "./Currtime";
import { MainFocous } from "./MainFocous";
import { Quotes } from "./Quotes";
import { GetWeather } from "./Weather";

export const CoverImage = () => {
  const [image, setImage] = useState({
    url: "",
    location: "",
    description: ""
  });

  const { url, location, description } = image;

  useEffect(() => {
    getImage(setImage);
  }, []);

  return (
    <div className="coverImage-mainContainer">
    <div className="download">
      <button className="btn">download</button>
    </div>
      <div className="main-container">
        
          <div className="getWeather">
           <GetWeather/>
          </div>
             
            <div className="getTime">
            <Currtime/>
             </div>

             <div className="MainFocous">
                <MainFocous />
                </div>

               <div className="getQuotes">
               <Quotes/>
                
              </div>


      </div>
  
      <div className="location">
                   <small className="mb-1 font-l"> place:{location}</small>
                 </div>
   <img src={url} alt={description} className="img_responsive cover-image" />

     </div>

  );
};
