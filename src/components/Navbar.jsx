import React from 'react'
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='fixed w-screen container mx-auto flex justify-between  items-center z-50 p-4'>
            <div className='md:h-20 h-10 md:w-[120px] h-[60px] flex items-center'>
                <img src='/icons/logo.png' alt='error' className='object-cover h-full w-full' />
            </div>
            <div>
                <Menu />
            </div>
            <div className='h-20 w-[120px] flex items-center invisible'>
                <img src='/icons/logo.png' alt='error' className='object-cover h-full w-full' />
            </div>
        </div>
    )
}

export default Navbar