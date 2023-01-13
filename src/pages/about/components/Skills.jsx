import React from 'react'


const Skills = ({data}) => {
    return (
        <>
            <div>
                <p className='text-white font-glory text-xl md:text-5xl text-cyan md:pb-8'>MY <span className='text-3xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue'>SKILLS</span></p>
                <p className='text-white text-xs md:text-2xl'>Skill or just a hobby that I learned, I also use technology outside my professional field and of course it will still be updated in the future.</p>
            </div>
            <div>
                <p className='text-white font-glory text-xl md:text-4xl text-white pb-4 md:pb-8 md:pl-9'>List</p>
                <div className='grid grid-cols-5 gap-y-10'>
                    {data.map((user, idx) => (
                        <div className='md:w-32 md:h-14 w-16 h-7 flex items-center justify-center' key={idx}>
                            <img src={user.icon} alt='error' className='object-cover h-full' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills