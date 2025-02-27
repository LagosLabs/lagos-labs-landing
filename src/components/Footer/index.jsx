import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
// import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  // const copyrightLinks = [
  //   {
  //     title: 'Terms of Use',
  //     href: '/'
  //   },
  //   {
  //     title: 'Privacy Policy',
  //     href: '/'
  //   }
  // ]
  
  const techMenu = [
    {
      title: 'E-commerce',
      href: '/services/mehchant'
    },
    {
      title: 'Smart Merchandising',
      href: '/services/merchandising'
    },
    {
      title: 'NFT Marketplace',
      href: '/services/fan-economy'
    },
    {
      title: 'Fan Engagement',
      href: '/services/activation'
    },
  ]

  const getDate = new Date().getFullYear();



  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='/images/LagosGold_sm.png' 
                  logoAlt='Logo'
                  text ='We are a passionate community of artists, creatives, tech and sustainability enthusiats harnessing open source technologies for our communities.'
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={techMenu} menuHeading='Services'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='Subscribe' 
                  subtitle='Signup for our newsletter to recieve update on developments and news around blockchain development.' 
                  placeholder='example@gmail.com'
                />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © {getDate} Lagos Labs.</Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div> */}
        </Div>
      </Div>
    </footer>
  )
}
