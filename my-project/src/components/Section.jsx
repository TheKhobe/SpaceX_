import React, { useEffect, useState } from 'react'
 import axios from 'axios';
import '../App.css'
import RocketFold from './RocketFold';
function Section() {
const API_URL = 'https://api.spacexdata.com/v3/rockets/'
const [rockets, setRockets] = useState([])

 const fetchRockets = async () => {
const {data: {results}} = await axios.get(`${API_URL}`)

setRockets(results)

 }

 useEffect(() => {
fetchRockets()
 }, [])
 
  const renderRockets = () => {
    
rockets&&rockets.map(rocket => (
  <RocketFold key={rocket.id} 
    rocket={rocket}/>
))
}
  return (
    <div className='App'>
<h1>Hello</h1>
    
   <div className='container'>
    {renderRockets()}

    </div>
</div>
  )
}

export default Section