import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import CarouselCardComponent from './carousel-card'
export default function CarouselComponent(props: any) {
  const { ref, focusKey } = useFocusable();
  
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
