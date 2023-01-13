import React from 'react'

const Projects = ({ data }) => {
    return (
        <div className='flex flex-col w-full space-y-8 pb-8'>
            {data.map((user, idx) =>
            (
                <div key={idx} className={`space-y-2 flex flex-col ${idx % 2 === 0 ? "md:items-start items-center" : "md:items-end items-center"} `}>
                    <img src={user.image} alt="ee" />
                    <p className='text-white capitalize md:text-lg text-xs'>{user.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Projects