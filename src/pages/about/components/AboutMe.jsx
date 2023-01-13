import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className='md:col-start-1 md:col-end-4'>
        <p className='font-glory font-medium md:text-5xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue'>
          Hello, Im
        </p>
        <h1 className='font-glory font-medium md:text-7xl text-3xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue'>
          M. Ridho Abror
        </h1>
        <p className='text-xs md:text-3xl pb-8 text-white'>
          UI/UX Design and WEB TESTING
        </p>
        <p className='text-white text-xs md:text-2xl'>I am very interested in the world of programming and UI/UX Design. Likes new things, challenges, especially finding solutions to problems in a project being worked on.</p>
      </div>
      <div className='md:col-start-4 md:col-end-6'>
        <div className='h-94 w-full rounded-xl overflow-hidden'>
          <img src='/icons/profil.jpg' alt='error' className='h-full w-full object-cover' />
        </div>
      </div>
    </>
  )
}

export default AboutMe