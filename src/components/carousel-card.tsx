import PropTypes from 'prop-types'; 

import foto from '../assets/img/pexels-jessica-lewis-creative-633481.jpg';

export default function CarouselCardComponent(props: any) {
  return (
    <div className="card">
            <h3 className='title-card'>{props.title}</h3>
            <img className='img-card' src={props.image !== '' ? props.image : foto} alt="Foto" />
            <p className='description-card'>{props.description}</p>
        </div>
  )
}

CarouselCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string
};  