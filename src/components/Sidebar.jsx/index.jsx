import React from "react";
import Div from "../Div";
import AuthorWidget from "../Widget/AuthorWidget";
import RecentPost from "../Widget/RecentPost";
// import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from "../Widget/SideMenuWidget";
import TagWidget from "../Widget/TagWidget";

export default function Sidebar() {
  const tagData = [
    {
      title: "Architecture",
      url: "/blog/web3-soa",
    },
    {
      title: "Development",
      url: "/blog/todo-dapp",
    },
    {
      title: "Web 3",
      url: "/blog/how-not-to-start-a-web3-biz",
    },
    {
      title: "NFTs",
      url: "/blog/a-case-for-nfts",
    },
    {
      title: "Blockchain",
      url: "/blog/a-case-for-data-engineers",
    },
  ];
  const archiveData = [
    {
      title: "Archives",
      url: "/blog",
    },
    {
      title: "11 Apr 2024",
      url: "/blog/web3-soa",
    },
    {
      title: "27 Mar 2024",
      url: "/blog/utility-based-nfts",
    },
    {
      title: "01 Mar 2024",
      url: "/blog/a-case-for-nfts",
    },
    {
      title: "15 Mar 2024",
      url: "/blog/a-case-for-data-engineers",
    },
    {
      title: "08 Feb 2024",
      url: "/blog/how-not-to-start-a-web3-biz",
    },
  ];

  const categoryData = [
    {
      title: "Blockchain",
      url: "/blog/a-case-for-data-engineers",
    },
    {
      title: "Crptocurrency",
      url: "/blog/how-not-to-start-a-web3-biz",
    },
    {
      title: "NFTs",
      url: "/blog/a-case-for-nfts",
    },
    {
      title: "Development",
      url: "/blog/todo-dapp",
    },
    {
      title: "Architecture",
      url: "/blog/web3-soa",
    },
  ];
  const recentPostData = [
    {
      title: "Exploring SOA in Web3...",
      thumb: "/images/services_arch.png",
      href: "/blog/web3-soa",
      date: "11 Apr 2024",
    },
    {
      title: "Build a React Todo DApp with Solidity...",
      thumb: "/images/about_hero_bg2.jpg",
      href: "/blog/todo-dapp",
      date: "02 Apr 2024",
    },
    {
      title: "Empowering Artists: Exploring Tokenization...",
      thumb: "/images/portfolio_details_1.jpeg",
      href: "/blog/utility-based-nfts",
      date: "27 Mar 2024",
    },
    {
      title: "A case for NFTs...",
      thumb: "/images/nft_post_1.png",
      href: "/blog/a-case-for-nfts",
      date: "01 Mar 2024",
    },
    {
      title: "How NOT to start...",
      thumb: "/images/how_not_2.png",
      href: "/blog/how-not-to-start-a-web3-biz",
      date: "08 Mar 2024",
    },
    {
      title: "Data Engineers, an important...",
      thumb: "/images/data_engine_2.png",
      href: "/blog/a-case-for-data-engineers",
      date: "22 Mar 2024",
    },
    // {
    //   title: 'The important roles...',
    //   thumb: '/images/recent_post_4.jpeg',
    //   href: '/blog/important-roles-in-web3',
    //   date: '29 Mar 2024'
    // },
  ];
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget
          src="/images/greg_author.png"
          name="Gregory Ajayi"
          description="I am a Public Health professional and experienced Data Analyst with experience in mass transit, healthcare, occupation and health sciences. I am interested in the intersectionalities of blockchain and public health frameworks for sustainable development."
        />
      </Div>
      {/* <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div> */}
      <Div className="cs-sidebar_item">
        <SideMenuWidget title="Categories" data={categoryData} />
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title="Archives" data={recentPostData} />
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title="Archives" data={archiveData} />
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title="Tags" data={tagData} />
      </Div>
    </>
  );
}
