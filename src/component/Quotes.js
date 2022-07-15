import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getRandomQuotes } from '../utils/api'

export const Quotes = () => {
 
    const [quote, setQuote]  = useState ({})
    
    const {text,author} = quote

    console.log(text,author);

    useEffect(() => {

        getRandomQuotes(setQuote)

    },[])
    
  return (
    <div>
      <h4>{text}</h4>
      <h5>{author}</h5>
    </div>
  )
}
