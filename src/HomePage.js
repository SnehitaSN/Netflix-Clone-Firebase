import React from 'react'
import Navbar from './Navbar'
import MovieDetail from './MovieDetail'
import Login from './Login'
import Logout from './Logout'
import ParticularMovie from './ParticularMovie'

function HomePage() 
{

  return (
    <div>
        <Navbar/>
        <ParticularMovie/>
        <MovieDetail/>
    </div>
  )
}

export default HomePage