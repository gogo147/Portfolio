import React from 'react';
import {  FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../style.css';

const Social = () => {
  return (
    <div className='social'>
        <div className='left'>
            <a href='https://www.linkedin.com/in/george-manaz-4b5130245/'>
                <FaLinkedin className='social_icons'/>
            </a>
        </div>
        <div className='right'>
            <a href='https://www.instagram.com/george_manaz'>
                <FaInstagram className='social_icons'/>
            </a>
        </div>
    </div>
  )
}

export default Social