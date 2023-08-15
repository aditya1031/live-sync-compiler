import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="video-background">
        <video playsInline autoPlay muted loop>
          <source src="/elements/vd3.mp4" type="video/mp4" />
        </video>
       
      </div>
      <h1>hello my name is aditya</h1>
    </>
  )
}

export default Home
