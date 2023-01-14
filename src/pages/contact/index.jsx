import React from 'react'

const contactData = [
    {
        image: "/contact/linkedin.png",
        text: "M RIDHO ABROR",
        url: "https://linkedin.com/in/m-ridho-abror-842954261",
        background: "bg-[#0077B5]",
    },
    {
        image: "/contact/instagram.png",
        text: "mri.dho_abror",
        url: "https://instagram.com/mri.dho_abror",
        background: "bg-gradient-to-b from-[#FCC232] via-[#FF656E] to-[#811CC3]",
    },
    {
        image: "/contact/github.png",
        text: "M.ridho 017",
        url: "https://github.com/mridho017",
        background: "bg-white",
    },
]

const Contact = () => {
    return (
        <div className='h-screen justify-center p-8 flex md:flex-row flex-col scrollbar-hide'>
            <div className='md:w-[40%] w-full md:h-full flex items-center'>
                <div>
                    <p className='text-white font-glory text-3xl md:text-7xl text-cyan md:pb-8'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue'>Indonesia</span></p>
                    <p className='text-white text-xs md:text-xl'>Tirto Utomo gang 10,Dusun Rambaan 31, Landungsari, Dau, Malang Regency, East Java</p>
                </div>
            </div>
            <div className='md:w-[60%] w-full relative flex md:h-full items-center justify-center md:pt-0 pt-8'>
                {contactData.map((user, idx) => (
                    <a href={user.url} key={idx} className={`flex flex-col text-white md:w-64 w-32 md:h-36 h-20 flex items-center justify-center md:mx-4 mx-2 p-4 rounded ${user.background} ${idx === 2 && "absolute md:mt-80 mt-48 text-black"}`}>
                        <img src={user.image} alt="" className='md:w-20 w-10' />
                        <p className='md:text-base text-[9px] pt-1'>{user.text}</p>
                        <p className='text-[8px] md:flex hidden'>{user.url}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Contact