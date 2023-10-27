import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Row from './Row'
import Originals from './Originals'

function Home() {
  return (
    <>
        <NavBar/>
        <Banner/>
        <div className='container mx-auto relative z-30'>
          <Originals/>
          <Row/>
        </div>
    </>
  )
}

export default Home