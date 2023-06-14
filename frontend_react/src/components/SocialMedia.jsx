import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/W3Charles" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div>
            <BsGithub />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/charles-sunday/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div>
            <FaLinkedinIn />
        </div>
      </a>

      <a href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div>
            <BsTwitter />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia