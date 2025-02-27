import React, { useState } from 'react'
import Div from '../Div'
import axios from 'axios'



export default function Newsletter({title, subtitle, placeholder}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Make POST request to server to submit email
      const response = await axios.post('/contact', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('An error occurred while submitting your email. Please try again later')
    }
  };
  

  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form className="cs-newsletter_form" onSubmit={handleSubmit}>
          <input type="email" className="cs-newsletter_input" placeholder={placeholder} value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required  />
          <button className="cs-newsletter_btn" type="submit" ><span>Send</span></button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
        <p>{message}</p>
      </Div>
    </>
  )
}
