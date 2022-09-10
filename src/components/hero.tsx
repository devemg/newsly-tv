import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { NavigationKey } from "../utils/navigation-keys";
import { onFocusCarousel } from "../utils/navigation";
import HeroSectionComponent from "./hero-card";

function DotComponent (props: any) {
  const onFocusHero = (event: any) => {
   onFocusCarousel(props.index, event?.node?.parentElement?.parentElement);
  };
  const { ref, focused } = useFocusable({ onFocus: onFocusHero });
  return (<div ref={ref} className={focused ? 'dot dot-focused' : 'dot'}></div>);
}

function HeroComponent(props: any) {
  const { ref, focusKey } = useFocusable({focusKey: NavigationKey.HERO});

  return (
    <div className="hero-container">
      <div className="hero-container__sections">
      {
        props.items.map((item: any) => 
        <HeroSectionComponent 
        title={item.title}
        paragraphs={item.paragraphs}
        image={item.image}
        key={item.id}
        ></HeroSectionComponent>)
      }
      </div>
      <FocusContext.Provider value={focusKey}>
        <div ref={ref} className="news-dots">
        {
          props.items.map((item: any) => <DotComponent key={item.id} index={props.index}></DotComponent>)
        }      
      </div>
    </FocusContext.Provider>
    </div>
  )
}

export default HeroComponent;