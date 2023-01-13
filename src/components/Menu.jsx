import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

const tabMenu = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Works",
        url: "/works",
    },
    {
        name: "Contact",
        url: "/contact",
    },
]

const Menu = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <button className='w-full' onClick={() => setShow(true)}>
                <FiMenu className='md:h-10 md:w-10 h-8 w-8 text-white' />
            </button>
            {show ?
                <div className='w-full fixed top-0 left-0 '>
                    <div className='md:p-16 p-10 bg-primary md:space-y-8 space-y-4 flex flex-col'>
                        {tabMenu.map((user, idx) => (
                            <a key={idx} href={user.url} className="justify-center flex flex-col items-center">
                                <p className='font-hotel md:text-6xl text-2xl text-white'>{user.name}</p>
                            </a>
                        ))}
                        <div onClick={() => setShow(false)} className='absolute right-10 top-0'><button className='md:text-4xl text-xl text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-pink font-bold'>✖</button></div>
                    </div>
                    <div className='w-full md:h-28 h-14 bg-black opacity-80' />
                </div>
                : ""}
        </>
    )
}

export default Menu