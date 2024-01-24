import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-white'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6]'>Skills</p>
                <p className='py-4'>These are the technologies I work with!</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='py-4'>css</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='py-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='py-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='py-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='py-4'>Mongo DB</p>
                </div>
                <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                    <p className='py-4'>Github</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills