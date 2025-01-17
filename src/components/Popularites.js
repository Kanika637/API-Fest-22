import React, {useState} from 'react'
import Slider from 'react-slick'
import Pop from './Popularity'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic1 from '../Images/discord.png'
import pic2 from '../Images/slack.png'
import pic3 from '../Images/online.png'
import pic4 from '../Images/coding.png'
import pic5 from '../Images/enterp.png'
import pic6 from '../Images/gaming.png'
import arrow from '../Images/Arrow.png'
import arrow1 from '../Images/Arrow1.png'
import '../styling/Popularities.css'

export default function Celebs() {
  // eslint-disable-next-line no-unused-vars
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='celebs'>
    <div className='celebs-head'>
      <p>Popular Searches</p>
    </div>
      <div className='celebs-controls'>
        <button className="celebs-left" onClick={sliderRef?.slickPrev}>
          <img src={arrow1} alt="left" />
        </button>
        <button className="celebs-right" onClick={sliderRef?.slickNext}>
          <img src={arrow} alt="right" />
        </button>
      </div>
      <Slider className="celeb-slider" ref={setSliderRef} {...sliderSettings}>
        <Pop imgCeleb={pic1} type="Folk" name="Discord Communities"   />
        <Pop imgCeleb={pic2} type="Folk" name="Slack Communities"   />
        <Pop imgCeleb={pic3} type="Folk" name="Online Communities"   />
        <Pop imgCeleb={pic4} type="Folk" name="Coding Communities"   />
        <Pop imgCeleb={pic5} type="Folk" name="Entrepreneur Communities"   />
        <Pop imgCeleb={pic6} type="Folk" name="Gaming Communities"   />
      </Slider>
    </div>
  )
}