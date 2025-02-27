import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/web3-soa', 
      src:'/images/services_arch.png', 
      alt:'Post', 
      date:'11 Apr 2024', 
      title:'Exploring Service Oriented Architecture (SOA) in Web3'
    },
    {
      url: '/blog/todo-dapp',
      src: '/images/web3_roles.jpg',
      alt: 'Post',
      date: '02 Apr 2024',
      title: 'Build a React Todo DApp with Solidity, Wagmi, TypeScript, and Next.js'
    },
    {
      url: '/blog/utility-based-nfts',
      src: '/images/utility_nft.jpg',
      alt: 'Post',
      date: '29 Mar 2024',
      title: 'Empowering Artists: Exploring Tokenization and Blockchain Solutions for Intellectual Property Rights'
    },
    {
      url: '/blog/a-case-for-nfts',
      src: '/images/service_3.jpg',
      alt: 'Post',
      date: '01 Mar 2024',
      title: 'A Case for NFTs to return to the Super Bowl following Usher'
    },
    {
      url: '/blog/how-not-to-start-a-web3-biz',
      src: '/images/how_not.jpg',
      alt: 'Post',
      date: '08 Feb 2024',
      title: 'How NOT to start a web 3 business'
    },
    {
      url: '/blog/a-case-for-data-engineers',
      src: '/images/data_engine.jpg',
      alt: 'Post',
      date: '15 Mar 2024',
      title: 'Data Engineers, an Important Role in Every Web 3 Project'
    },
    
    // {
    //   url:'/blog/ai-blockchain-revolution', 
    //   src:'/images/blockchain_ai.jpg', 
    //   alt:'Post', 
    //   date:'05 Apr 2024',
    //   title:'A.I and Blockchain, an intersection worth exploring in in modern markets'
    // }
  ]

  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  )
}
