import React from 'react'
import CarouselComponent from '../components/carousel'
import HeroComponent from '../components/hero'

export default function HomePage() {
  return (
    <div className='container-all'>
      <div className="left-element">
        <div className="header">
          <div className="edition">
            <p>Edition No. 1</p>
          </div>
          <div className="date">
            <p>Thursday, September 1, 2022</p>
          </div>
        </div>
        <div className="title">
          <h1>Newsly</h1>
        </div>
      <HeroComponent></HeroComponent>
      <CarouselComponent></CarouselComponent>
      </div>
    </div>
  )
}
