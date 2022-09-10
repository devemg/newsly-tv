import React from 'react'
import foto from '../assets/img/pexels-jessica-lewis-creative-633481.jpg';

export default function CarouselCardComponent() {
  return (
    <div className="card">
            <h3 className='title-card'>Title #1</h3>
            <img className='img-card' src={foto} alt="Foto" />
            <p className='description-card'>Description of two lines</p>
        </div>
  )
}
