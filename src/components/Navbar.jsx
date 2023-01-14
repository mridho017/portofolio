import React from 'react'
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='fixed w-full mx-auto z-50 p-4 flex justify-center'>
            <div className='container w-full flex justify-between items-center'>
                <div className='md:h-20 h-10 md:w-[120px] h-[60px] flex items-center'>
                    <img src='/icons/logo.png' alt='error' className='object-cover h-full w-full' />
                </div>
                <div>
                    <Menu />
                </div>
                <div className='invisible md:h-20 h-10 md:w-[120px] h-[60px] flex items-center'>
                    <img src='/icons/logo.png' alt='error' className='object-cover h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Navbar