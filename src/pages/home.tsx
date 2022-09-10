import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import CarouselComponent from '../components/carousel'
import FooterComponent from '../components/footer'
import HeroComponent from '../components/hero'
import MenuComponent from '../components/menu';
import { useLocation } from "react-router-dom";

var data = require("../data.json");

export default function HomePage() {
  const { ref, focusKey } = useFocusable();
  const [currentData, setCurrentData] = useState(data.home);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('home')) {
      // load home
      setCurrentData(data.home);
    } else if (location.pathname.includes('sports')) {
      // load sports
      setCurrentData(data.sports);
    }
  }, [location])
  

  return (
    <FocusContext.Provider value={focusKey}>
    <div  ref={ref} className='container-all'>
        <div className="header border-bottom">
          <div className="edition">
            <p>Edition No. {data.version}</p>
          </div>
          <div className="date">
            <p><Moment format='LLL' interval={60000}>{new Date()}</Moment></p>
          </div>
        </div>
        <div className="title border-bottom">
          <h1>Newsly</h1>
        </div>
        <MenuComponent></MenuComponent>
      <div className='content'>
        {
          currentData.map((item: any) => {
            switch(item.type) {
              case 'hero': return <HeroComponent key={item.id} items={item.items}></HeroComponent>
              case 'preview': return <CarouselComponent key={item.id} title={item.title} items={item.items}></CarouselComponent>
              default: return '';
            }
          })
        }
      </div>
      <FooterComponent></FooterComponent>
    </div>
    </FocusContext.Provider>
  )
}
