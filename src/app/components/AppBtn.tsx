import React from 'react'
import './appBtn.css'

export default function AppBtn({name}:{name:string}) {

    const handleScrollTo = (section:string) => {
        // loads  booking an adventure with us 
        // yo kam na lagna sakcha pachi comment it out
    }

  return (
    <a 
        className="app-btn scrollto d-none d-lg-flex"
        onClick={()=> handleScrollTo('book-a-table')}
        >
        {name}
        </a>

  )
}
