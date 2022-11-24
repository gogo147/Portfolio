import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../style.css';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='Con_container'>
                <div className='title'>
                    <h1>Projects</h1>
                    <div className='line'></div>
                </div>
                <div className='Con_box'>
                    <a href='https://github.com/gogo147'><FaGithub className='icon'/></a>
                </div>
            </div>   
        </div>
    </div>
  )  
}

export default Projects