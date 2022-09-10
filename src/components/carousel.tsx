import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { onFocusCarousel } from '../utils/navigation';
import CarouselCardComponent from './carousel-card'
export default function CarouselComponent(props: any) {
  const onFocusCards = (event: any) => {
    onFocusCarousel(props.index, event?.node?.parentElement);
   };
  const { ref, focusKey } = useFocusable({focusKey: props.id, onFocus: onFocusCards });
  
  return (
    <div className='carousel-container'>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <FocusContext.Provider value={focusKey}>
        <div ref={ref} className="cards-container">
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
        </FocusContext.Provider>
    </div>
    
  )
}
