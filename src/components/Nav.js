import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  let navigate = useNavigate()
  return (
    <div className='nav-container'>
      <h2>Crypto Currency Watchlist</h2>
      <div className='nav-links'>
        <div className='links' onClick={() => {navigate("/crypto-app")}} >Home</div>
        <div className='links' onClick={() => {navigate("/portfolio")}} >Portfolio</div>
      </div>
    </div>
  )
}
