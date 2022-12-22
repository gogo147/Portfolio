import React from 'react';

import Gogo from '../assets/gogo.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                
                </div>
            <div className='max-w-[1000px] w-[85%] grid sm:grid-cols-2 gap-8'>
                <img className='max-w-[250px] rounded-full' src={Gogo} /> 
            <div>
                <p>My name is George Manaz and I am studying 
                    to become a Fullstack developer at Changemaker 
                    Educations in Stockholm, and will finish in the 
                    spring of 2023. I am a talented, ambitious and
                    hardworking individual, with broad skills and 
                    experience in digital and printed marketing, 
                    social media and leading projects. Furthermore, 
                    I am adept at handling multiple tasks on a daily 
                    basis competently and at working well under 
                    pressure. A key strength is communication; 
                    building strong relationships with people in 
                    order to deliver the best results.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About