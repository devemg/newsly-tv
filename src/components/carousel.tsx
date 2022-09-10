import React from 'react'
import CarouselCardComponent from './carousel-card'

export default function CarouselComponent() {
  return (
    <div className='carousel-container'>
        <div className="title">
          <h3>Last News</h3>
        </div>
        <div className="cards-container">
          <CarouselCardComponent></CarouselCardComponent>
          <CarouselCardComponent></CarouselCardComponent>
          <CarouselCardComponent></CarouselCardComponent>
          <CarouselCardComponent></CarouselCardComponent>
          <CarouselCardComponent></CarouselCardComponent>
          <CarouselCardComponent></CarouselCardComponent>
        </div>
    </div>
  )
}
