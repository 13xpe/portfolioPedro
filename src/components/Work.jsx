import React from 'react'
import doctorApp from '../assets/doctor.png'
import issMap from '../assets/ISSmap.png'
import studentsApp from '../assets/studentRegis.png'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-[#ccd6f6]'>Work</p>
                <p className='py-6'>Check some of my recent work!</p>
            </div>

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${doctorApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center items-center font-bold text-white tracking-wider'>Doctor Appointment Scheduler</span>
                        
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/13xpe/doctorAppointmentDesktopApp'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${issMap})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>ISS Tracker W/ NASA API</span>
                        
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/13xpe/ISSTracker'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${studentsApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Student's Registrations App</span>
                        
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/13xpe/studentRegistration-AppDev'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work