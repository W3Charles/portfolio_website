import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text"> Take a coffee & chat with me </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@charlessunday.com" className="p-text">hello@charlessunday.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +1 (123) 456-789" className="p-text">+1 (123) 456-789m</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
      </div>
      <div>
        <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name={message}
          onChange={handleChangeInput}
        />
      </div>
      <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>

    </>
  )
}

export default AppWrap (
  MotionWrap (Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);