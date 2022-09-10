import  hero1 from '../assets/img/hero-1.jpg';
import PropTypes from 'prop-types'; 
export default function HeroSectionComponent(props: any) {
  return (
    <div className='news-container'>
      <h1>{props.title}</h1>
      <div className="content">
        <div>
          {
            props.paragraphs.map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>)
          }
        </div>
        <img src={props.image !== '' ? props.image : hero1} alt="Hero-1" />
      </div>
    </div>
  )
}


HeroSectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string)
};  