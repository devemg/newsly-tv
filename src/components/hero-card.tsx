import  hero1 from '../assets/img/hero-1.jpg';

export default function HeroSectionComponent() {
  return (
    <div className='news-container'>
      <h1>Title 1</h1>
      <div className="content">
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at finibus ante. Maecenas venenatis in sapien ut commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tortor ex, consequat ut pretium sit amet, ultricies quis turpis.</p>
        <p>Maecenas semper nisl nec sapien congue consectetur. Vivamus eu odio pulvinar, bibendum orci ac, volutpat massa. Praesent eget magna nec lectus dignissim accumsan. In eget dui ut nisi tincidunt accumsan. Nulla condimentum massa et porta vestibulum. Mauris elementum lectus dolor, at dignissim magna vehicula ut. Donec interdum vel massa dictum suscipit. In eget massa ornare, convallis quam ut, maximus tellus.</p>
        </div>
        <img src={hero1} alt="Hero-1" />
      </div>
    </div>
  )
}
