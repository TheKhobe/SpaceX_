import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const RocketFold = ({rocket}) => {
 return (
  <div>
  <Link to={`/rockets/${rocket.rocket_id}`}>
  <img src={rocket.flickr_images[1]} alt='first'/>
 <h3 className='font-bold text-3xl text-black'>{rocket.rocket_name}</h3>
 </Link>
  </div>
 )
}

export default RocketFold
