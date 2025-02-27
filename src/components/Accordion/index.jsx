import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What is Blockchain?',
      answer: 'Blockchain is a decentralized ledger that records transaction information about a cryptocurrency in a chronological order.'
    },
    {
      question: 'What are smart contracts?',
      answer: 'Automated contract that trigger certain action when predetermined conditions are met. Smart contracts are lines of code that execute a specific function once certain conditions are met.'
    },
    {
      question: 'What are Non-fungible Tokens?',
      answer: 'Non-fungible Tokens or NFTs are a type of cryptographic token that represents a unique digital or real world asset and isn’t interchangeable.'
    },
    {
      question: 'What is Fan Engagement & Experience?',
      answer: 'At Lagos Labs, we take advantage of open-source technologies to develop our projects, which helps in reducing cost to the customer.'
    },
    {
      question: 'How can I learn more about the products developments?',
      answer: 'You can reach us at hello@lagoslabs.dev to access our projects stack.'
    },
    {
      question: 'Are blockchain and NFT projects expensive?',
      answer: 'At Lagos Labs, we take advantage of open-source technologies to develop our projects, which helps in reducing cost to the customer.'
    },
    
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
