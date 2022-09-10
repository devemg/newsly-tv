import HeroSectionComponent from "./hero-card";

function HeroComponent() {
  return (
    <div className="hero-container">
      <div className="hero-container__sections">
      <HeroSectionComponent></HeroSectionComponent>
      </div>
    <div className="news-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    </div>
  )
}

export default HeroComponent;