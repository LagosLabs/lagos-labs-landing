// import { Icon } from '@iconify/react'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../../helper/index.js";
import Cta from "../Cta/index.jsx";
import PageHeading from "../PageHeading/index.jsx";
import Div from "../Div/index.jsx";
import Sidebar from "../Sidebar.jsx/index.jsx";
import Spacing from "../Spacing/index.jsx";
import VideoModal from "../VideoModal/index.jsx";

export default function BlogTodoDapp() {
  // const params = useParams()
  pageTitle("Build a Todo Dapp");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Build a Simple Todo React DApp"
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText="Todo DApp"
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img
                  src="/images/todo_dapp.png"
                  alt="Post"
                  className="w-100 cs-radius_15"
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">02 Apr 2024</span>
                  <Link to="/blog/todo-dapp" className="cs-post_avatar">
                    Web 3
                  </Link>
                </Div>
                <h2 className="cs-post_title">
                  {" "}
                  Build a React Todo DApp with Solidity, Wagmi, TypeScript, and
                  Next.js
                </h2>
                <p>
                  When learning or beginging a web development journey, it is
                  widely accepted that building a simple Todo application can
                  facilitate learning the core tenets required of any programmer
                  or web developer. Fundamental skills such as database
                  manipulation or CRUD, HTML, and server-side rendering or SSR
                  are some of the core knowledge base acquired during such
                  build.{" "}
                </p>
                <p>
                  In the world of decentralized applications (DApps), the
                  combination of cutting-edge technologies like Solidity, Wagmi,
                  TypeScript, and Next.js offers a powerful toolkit for
                  developers to create innovative and efficient solutions. In
                  this tutorial, we'll walk through an overview process of
                  building a Todo DApp using these technologies, demonstrating
                  how they can be seamlessly integrated to create a robust and
                  user-friendly application.
                </p>
                <h3>Introduction to DApps and Wagmi:</h3>
                <p>
                  Decentralized applications (DApps) are applications that run
                  on a decentralized network, such as a blockchain. They offer
                  several advantages over traditional centralized applications,
                  including increased security, transparency, and censorship
                  resistance. Wagmi (We're All Gonna Make It) is a developer
                  framework that provides tools and infrastructure for building
                  and deploying DApps on multiple blockchains including
                  Ethereum.
                </p>
                <blockquote className="cs-primary_font">
                  Transaction costs, blockchain types, and ease of use are some
                  of factors to consider before deploying a DApp.
                  <small>Gregory Ajayi</small>
                </blockquote>
                <h3>Setting Up Your Development Environment:</h3>
                <p>
                  Before we dive into coding, let's set up our development
                  environment. We'll need Node.js and npm installed on our
                  machine, as well as a code editor like Visual Studio Code.
                  We'll also need to install the necessary dependencies for our
                  project using npm.{" "}
                </p>
                <code className="cs-primary_font">
                  <p>npx create-next-app@latest</p>
                  <p>npm install wagmi viem@2.x @tanstack/react-query</p>
                  <p>
                    Install other dependencies as required by Wagmi to ensure an
                    error-free development.
                  </p>
                </code>
                <h3>Creating the Todo Smart Contract:</h3>
                <p>
                  We'll start by creating a Solidity smart contract for our Todo
                  DApp. This contract will store todo items on the Ethereum
                  blockchain and allow users to execute database CRUD principles
                  such as create, update, and delete todos. We'll define the
                  data structure for our todo items and implement functions for
                  adding, updating, and deleting todos.
                </p>
                <h3>Testing and Deployment:</h3>
                <p>
                  Once our Todo smart contract is deployed and{" "}
                  <a href="https://mumbai.polygonscan.com/address/0x132ad93af0b4a0a34147b9857eee014b424f62e2#code">
                    verified
                  </a>
                  , we can test it locally using hardhat plugins like Chai,
                  Mocha or Waffle or on the Remix IDE (if creating the smart
                  contract external of the development folder), to ensure all
                  smart contract functions are working as expected. We'll then
                  deploy it to a test network, such as Layer 1 network (L1) Sepolia or
                  Georli or a Layer 2 (L2) Ethereum blockchain network like Polygon
                  Mumbai, to test it in a real-world environment.
                </p>
                <h3>Building the React Frontend:</h3>
                <p>
                  Next, we'll create the frontend for our Todo DApp using React
                  and TypeScript. We'll set up the project structure using
                  Next.js, a popular React framework for building server-side
                  rendered (SSR) and static websites. We'll create components
                  for connecting to the blockchain, displaying todo items, 
                  adding new todos, and updating todo status.
                </p>
                <h3>Integrating Wagmi with Next.js:</h3>
                <p>
                  To connect our Todo DApp to the Ethereum blockchain, we'll use
                  Wagmi's SDK installed earlier, and Wallet Connect. A project ID
                  which can be obtained from the Wallet Connect website, is required
                  to allow users sign into the DApp and interact with the smart contract
                  - for analytics and insights, a backend can be built
                  around this feature to measure connectivity and other web analytics of your choosing. 
                  Once installed and set up, we'll then use the SDK to interact with our Todo smart contract,
                  calling functions to read, add, update, and delete todos.
                </p>
                <h3>Conclusion:</h3>
                <p>
                  In this tutorial, we've explored how to build a Todo DApp
                  using Solidity, Wagmi, Wallet Connect, TypeScript, and Next.js. We've seen how
                  these technologies can be combined to create a powerful and
                  efficient decentralized application. With the skills and
                  knowledge gained from this tutorial, you'll be well-equipped
                  to build your own DApps and contribute to the exciting world
                  of decentralized applications. <br />
                  <br />
                  You can find the full code for this tutorial on our{" "}
                  <a
                    href="https://github.com/LagosLabs/web3-todo-dapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>GitHub repository</u>
                  </a>
                  .
                </p>{" "}
              </Div>

              <p>
                Special thanks to <u>Techie Vishwa</u> for the initial development.{" "}
                <br />
                This post is part of our commitment to leveraging open-source
                technologies for the betterment of our communities.
              </p>
            </Div>
            {/* End Details Post Content */}
            {/* Start Video Block Section */}
            <Spacing lg="100" md="40" />
            <Div className="container">
              <p className="text-center">
                Watch a 5 minute demonstration of the Todo DApp in action below.
              </p>
              <Spacing lg="40" md="40" />
              <VideoModal
                videoSrc="https://www.youtube.com/watch?v=maoKvPLaIF8"
                bgUrl="/images/portfolio_details_2.jpg"
              />
            </Div>
            {/* End Video Block Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="80" />
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Learn about our <br /><i>exciting</i> projects"
          btnText="Contact Us Today"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
