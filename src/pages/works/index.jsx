import React from 'react'
import Projects from './components/Projects'

const worksData = [
    {
        image: "/work/mpro.png",
        text: "design penambahan fitur pada Muslim Pro",
        url: "www.google.com"
    },
    {
        image: "/work/pln.png",
        text: "Design data gaji karyawan PLN UP 3 Balikpapan",
        url: "www.google.com"
    },
    {
        image: "/work/paren.png",
        text: "Design aplikasi kesehatan Balita Dan anak",
        url: "www.google.com"
    },
]

const Works = () => {
    return (
        <div className='h-screen p-8 flex md:flex-row flex-col pt-[120px] md:pt-0 scrollbar-hide'>
            <div className='md:w-[30%] md:fixed h-full flex items-center'>
                <div>
                    <p className='text-white font-glory md:text-5xl text-xl text-cyan md:pb-8'>MY <span className='md:text-7xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue'>WORKS</span></p>
                    <p className='text-white md:text-2xl text-xs'>Here is a list of projects I've worked on</p>
                </div>
            </div>
            <div className='md:pl-[34%] w-[100%] relative md:pt-[110px] pt-8'>
                <Projects data={worksData} />
            </div>
        </div>
    )
}

export default Works