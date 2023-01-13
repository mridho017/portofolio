import React from 'react'

const Experiences = ({ data }) => {
    return (
        <>
            <div>
                <p className='text-white font-glory text-xl md:text-5xl text-cyan md:pb-8'>MY <span className='text-3xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue'>EXPERIENCES</span></p>
                <p className='text-white text-xs md:text-2xl'>The following is an organizational experience that I have attended and educational records</p>
            </div>
            <div className='md:space-y-14 space-y-7'>
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col md:space-y-8 space-y-4">
                        <p className='text-white md:text-4xl text-white'>{item.title}</p>
                        <div className='grid grid-cols-2 gap-4'>
                            {item.detail.map((item, idx) => (
                                <div key={idx} className='text-white text-center'>
                                    <div className='w-full h-16 md:h-32 overflow-hidden bg-start'>
                                        <img src={item.image} alt="error" className='w-full object-cover' />
                                    </div>
                                    <div className='md:text-base text-xs'>{item.name}</div>
                                    <div className='md:text-base text-xs'>{item.date}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default Experiences