import HeroSectionComponent from "./hero-card";

function HeroComponent(props: any) {
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
    <div className="news-dots">
      {
        props.items.map((item: any) => <div key={item.id} className="dot"></div>)
      }      
    </div>
    </div>
  )
}

export default HeroComponent;