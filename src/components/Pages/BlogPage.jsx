import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
//import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogPage() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/Wallet.png',
      title:'Exploring Service Oriented Architecture (SOA) in Web3',
      subtitle:"Service-Oriented Architecture (SOA) has been a cornerstone of software development for decades, offering a modular approach....",
      date:'10 Apr 2024',
      category:'Development',
      categoryHref:'/blog',
      href:'/blog/web3-soa'
    },
    {
      thumb:'/images/about_hero_bg2.jpg',
      title:'Build a React Todo DApp with Solidity, Wagmi, TypeScript, and Next.js',
      subtitle:"When learning or beginging a web development journey, it is widely accepted that building a simple Todo application can facilitate ....",
      date:'02 Apr 2024',
      category:'Blockchain',
      categoryHref:'/blog',
      href:'/blog/todo-dapp'
    },
    {
      thumb:'/images/data_engine_1.png',
      title:'Empowering Artists: Exploring Tokenization and Blockchain Solutions for Intellectual Property Rights',
      subtitle:"In my interactions with creators and artists, the question of how tokenization could empower them to reclaim their intellectual property (IP) and elevate their brand often arises....",
      date:'27 Mar 2024',
      category:'Blockchain',
      categoryHref:'/blog',
      href:'/blog/utility-based-nfts'
    },
    {
      thumb:'/images/nft_post.png',
      title:'A case for NFTs to return to the Super Bowl following Usher',
      subtitle:"The Super Bowl halftime show has always been a spectacle, capturing the attention of millions around the world. This year, Usher's electrifying performance not only wowed audiences but also hinted at the untapped potential of non-fungible tokens (NFTs) in the world of mainstream entertainment. As we reflect on the impact of Usher's show-stopping performance",
      date:'07 Mar 2024',
      category:'NFTs',
      categoryHref:'/blog',
      href:'/blog/a-case-for-nfts' 
    },
    {
      thumb:'/images/how_not_1.png',
      title:'How NOT to start a web 3 business', 
      subtitle:"In the ever-evolving landscape of digital innovation, Web 3.0 has emerged as a promising frontier, offering decentralized, trustless, and transparent solutions through blockchain technology. However, amid the excitement and potential, there are pitfalls that aspiring entrepreneurs...",
      date:'05 Mar 2024',
      category:'Web 3 Businesses',
      categoryHref:'/blog',
      href:'/blog/how-not-to-start-a-web3-biz'
    },
    {
      thumb:'/images/data_engine_1.png',
      title:'Data Engineers, an Important Role in Every Web 3 Project',
      subtitle:"In the fast-paced world of Web 3.0, where decentralized applications (dApps), blockchain technology, and data-driven solutions reign supreme, the role of data engineers has never been more...",
      date:'04 Mar 2024',
      category:'Blockchain',
      categoryHref:'/blog',
      href:'/blog/a-case-for-data-engineers'
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Blog'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            {/* Pagination can be added after 4 or more blog posts */}
            {/* <Pagination/>  */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Learn about our <br /><i>exciting</i> projects"
          btnText='Contact Us Today' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
