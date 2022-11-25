import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <ul className='hidden md:flex mx-auto text-xl'>
                <li className='hover:text-gray-50'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-gray-50'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-gray-50'>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-gray-50'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars size={28} /> : <FaTimes size={28} />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                    Projects
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/george-manaz-4b5130245/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#b436ae]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.instagram.com/george_manaz'>
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar