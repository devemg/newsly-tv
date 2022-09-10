import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';
import Moment from 'react-moment';
import CarouselComponent from '../components/carousel'
import FooterComponent from '../components/footer'
import HeroComponent from '../components/hero'
import { NavigationKey } from '../navigation-keys';
var data = require("../data.json");

export default function HomePage() {
  const { ref, setFocus, focusKey } = useFocusable();

  useEffect(() => {
    setFocus(NavigationKey.HERO);
  }, [setFocus]);
  
  return (
    <FocusContext.Provider value={focusKey}>
    <div  ref={ref} className='container-all'>
        <div className="header">
          <div className="edition">
            <p>Edition No. {data.version}</p>
          </div>
          <div className="date">
            <p><Moment format='LLL' interval={60000}>{new Date()}</Moment></p>
          </div>
        </div>
        <div className="title">
          <h1>Newsly</h1>
        </div>
      <div className='content'>
        {
          data.home.map((item: any) => {
            switch(item.type) {
              case 'hero': return <HeroComponent key={item.id} items={item.items}></HeroComponent>
              case 'preview': return <CarouselComponent key={item.id} title={item.title} items={item.items}></CarouselComponent>
            }
          })
        }
      </div>
      <FooterComponent></FooterComponent>
    </div>
    </FocusContext.Provider>
  )
}
