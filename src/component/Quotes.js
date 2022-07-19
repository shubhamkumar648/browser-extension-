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
    <div className='flex center'>
      <small> {text} </small>
      <small> ~ {author} </small>
    </div>
  )
}
