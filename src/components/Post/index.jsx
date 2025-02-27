import React from 'react'
//import { Link } from 'react-router-dom'
import Div from '../Div'
import './post.scss'

export default function Post({url, src, alt, date, title}) {
  return (
    <Div className="cs-post cs-style1">
      <a href={url} className="cs-post_thumb"  target="_blank"  rel="noreferrer">
        <img src={src} alt={alt} />
        <Div className="cs-post_overlay" />
      </a>
      <Div className="cs-post_info">
        <Div className="cs-posted_by">{date}</Div>
        <h2 className="cs-post_title"><a href="blog/" target="_blank"  rel="noreferrer">{title}</a></h2>
      </Div>
    </Div>
  )
}
