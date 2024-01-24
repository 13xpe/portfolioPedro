import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import {HiOutlineMail} from'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return(
    <div className='fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
      <div>
        <h1>Pedro Cabrita</h1>
      </div>
    
      
        <ul className='hidden md:flex'>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
          <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
    

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-5 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='py-5 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
          <li className='py-5 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li className='py-5 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
          <li className='py-5 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
      

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/pecabrita' target='_blank' rel='noopener noreferrer'>
            Linkedin < FaLinkedin size={20}/>
          </a>
        </li>
        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.github.com/13xpe' target='_blank' rel='noopener noreferrer'>
            Github < FaGithub size={20}/>
          </a>
        </li>
        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#6fc2b0]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='mailto:pedrodanielcabrita@gmail.com'>
            Email < HiOutlineMail size={20}/>
          </a>
        </li>
        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#565f69]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1eABC43eth3-3LNHIH72YCED3rYHTFUqp/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
            Resume < BsFillPersonLinesFill size={20}/>
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}
export default NavBar