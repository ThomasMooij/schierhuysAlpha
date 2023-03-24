import React from 'react'
import Contact from '../components/home/Contact'
import Landing from '../components/home/Landing'
import Photos from '../components/home/Photos'
import Reserve from '../components/home/Reserve'
import Reviews from '../components/home/Reviews'

const Home = ( {setSelectedPage}) => {
  return (
    <>
      <Landing setSelectedPage={setSelectedPage}/>
      <Photos />
      <Reserve />
      <Reviews />
      <Contact />
     
    </>
  )
}

export default Home
