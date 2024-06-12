import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link to="/">
      <h5 style={{fontFamily: 'face'}}>&nbsp;&nbsp;Home&nbsp;&nbsp;</h5>
      </Link>
      <Link to='https://epic-turbo-thunder-snail-racers.onrender.com/' target='_blank'>
      <h5 style={{fontFamily: 'face'}}>&nbsp;Snail Race&nbsp;&nbsp;</h5>
      </Link>
      <Link to="/Zelda">
      <h5 style={{fontFamily: 'face'}}>&nbsp;Zelda API&nbsp;&nbsp;</h5>
      </Link>
      <Link to='/Retro'>
      <h5 style={{fontFamily: 'face'}}> &nbsp;Cool Stuff&nbsp;&nbsp;</h5>
      </Link>
      <Link to="/Me">
      <h5 style={{fontFamily: 'face'}}>About Me</h5>
      </Link>
    </div>
  )
}

export default Directory