import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import PropTypes from 'prop-types'; 

import foto from '../assets/img/pexels-jessica-lewis-creative-633481.jpg';

export default function CarouselCardComponent(props: any) {  
  const onFocusCard = (event: any) => {
    event.node.scrollIntoView();
   };
  const { ref, focused } = useFocusable({onFocus: onFocusCard});
  return (
    <div ref={ref} className={focused ? 'card card-focused' : 'card'}>
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