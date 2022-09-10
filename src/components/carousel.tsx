import React from 'react'
import CarouselCardComponent from './carousel-card'

export default function CarouselComponent(props: any) {
  return (
    <div className='carousel-container'>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="cards-container">
          {
            props.items.map((item: any) => 
            <CarouselCardComponent
            title={item.title}
            description={item.description}
            image={item.image}
            key={item.id}
            ></CarouselCardComponent>)
          }
        </div>
    </div>
  )
}
