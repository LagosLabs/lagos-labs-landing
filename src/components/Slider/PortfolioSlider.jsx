import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Loverrr International',
      subtitle:'See Details',
      href:'/portfolio/loverrr',
      src:'/images/Loverrr.png'
    },
    {
      title:'Pasuma US Tour 2023',
      subtitle:'See Details',
      href:'/portfolio/pasuma',
      src:'/images/pasuma_.png'
    },
    {
      title:'Bubbleboy',
      subtitle:'See Details',
      href:'/portfolio/bubbleboy',
      src:'/images/bubbleb0y.png'
    },
    {
      title:'Galacticos FC Chicago Jersey Design',
      subtitle:'See Details',
      href:'/portfolio/galacticos',
      src:'/images/galacticos.jpg'
    },
    {
      title:'Streamillonaire DAO NFT',
      subtitle:'See Details',
      href:'/portfolio/streamillonaire',
      src:'/images/streamillonaire_1.png'
    },
    {
      title:'Creative After Dark',
      subtitle:'See Details',
      href:'/portfolio/creative',
      src:'/images/creative.jpg'
    },
    {
      title:'Streamillonaire Mylar Baggies',
      subtitle:'See Details',
      href:'/portfolio/baggies',
      src:'/images/litepaper_6.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
