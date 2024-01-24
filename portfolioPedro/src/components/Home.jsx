import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex pb-50 flex-col justify-center h-full'>
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pedro Cabrita</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>A dedicated software/web developer known 
          for an organized and dependable approach, bringing
          confidence in crafting digital solutions.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6]'><Link to='work' smooth={true} duration={500}>View Work</Link> 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
      </div>

    </div>
  )
}

export default Home