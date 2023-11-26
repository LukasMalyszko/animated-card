import React from 'react'
import './Card.scss'

export const Card = () => {
  return (
    <div className="card">
      <img className="logo" 
        src="totti logo.png" alt="" />
      <img className="front-image" 
        src="totti celeb.png" alt="Francesco Totti celebrating scored goal" />
      <img className="bg-image" 
      src="totti roma.jpg" alt="Young Totti in classic Roma kit" />
    </div>
  )
}
