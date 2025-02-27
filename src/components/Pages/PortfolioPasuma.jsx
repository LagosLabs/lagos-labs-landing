import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero6 from '../Hero/Hero6';
import Spacing from '../Spacing';
import Div from '../Div';
import Button from '../Button';
import SectionHeading from '../SectionHeading';


export default function PortfolioPasuma() {
  pageTitle('Pasuma US Tour 2023');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const showcaseData = [
    {
      title: '',
      imgUrl: '/images/pasuma_6.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/pasuma_2.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/pasuma_4.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/pasuma_5.png',
      href: '',
    },
  ];

  return (
    <>
      <Hero6
        showcaseData={showcaseData}
      />
      <Spacing lg='150' md='80'/>
       <Div className="container">
         <Spacing lg='90' md='40'/>
         <Div className="row">
           <Div className="col-lg-6">
             <SectionHeading 
               title="Fan Engagement"
               subtitle= "Pasuma US Tour 2023"
             >
               <Spacing lg='40' md='20'/>
               <p>After establishing a merchandizing licencing agreement, we fulfilled IRL merch sales and fulfillment at select tour locations. </p>
               <Spacing lg='10' md='10'/>
               <p>Starting Summer 2024, online sales will be available on the Streamillonaire Platform and select US and Nigerian boutiques and locations nationwide.</p>
             </SectionHeading>
           </Div>
          <Div className="col-lg-5 offset-lg-1">
             <Spacing lg='60' md='40'/>
             <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
             <Spacing lg='50' md='30'/>
             <Div className="row">
               <Div className="col-6">
                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                 <p className='cs-m0'>Fan Experience</p> 
                 <Spacing lg='30' md='30'/>
               </Div>
               <Div className="col-6">
                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                 <p className='cs-m0'>United States</p>
                 <Spacing lg='30' md='30'/>
               </Div>
               <Div className="col-6">
                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                 <p className='cs-m0'>Fall 2023</p>
                 <Spacing lg='30' md='30'/>
               </Div>
               <Div className="col-6">
                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                 <p className='cs-m0'>Jizzy</p>
                 <Spacing lg='30' md='30'/>
               </Div>
             </Div>
           </Div>
         </Div>
         <Spacing lg='65' md='10'/>
           <Div className="cs-page_navigation cs-center">
             <Div>
               <Button btnLink='/portfolio/loverrr' btnText='Prev Project' variant='cs-type1'/> 
             </Div>
             <Div>
               <Button btnLink='/portfolio/bubbleboy' btnText='Next Project'/>
             </Div>
           </Div>
       </Div>
    </>
  );
}