import React from 'react'
import AboutMe from './components/AboutMe'
import Experiences from './components/Experiences'
import Skills from './components/Skills'

const SkillsData = [
    {
        icon: "/icons/xd.png",
    },
    {
        icon: "/icons/figma.png",
    },
    {
        icon: "/icons/office.png",
    },
    {
        icon: "/icons/photoshop.png",
    },
    {
        icon: "/icons/Canva.png",
    },
    {
        icon: "/icons/capcut.png",
    },
    {
        icon: "/icons/katalon.png",
    },
    {
        icon: "/icons/premiere.png",
    },
]

const ExperiencesData = [
    {
        title: "Education",
        detail: [
            {
                name: "Muhammadiyah Malang University",
                date: "August 2019 - Present",
                image: "/experience/umm.png",
            },
            {
                name: "SMA Negeri 1 Tenggarong",
                date: "June 2016 - june 2019",
                image: "/experience/sma.png",
            },
        ]
    },
    {
        title: "Organization",
        detail: [
            {
                name: "UKM TAEKWONDO UMM",
                date: "March 2020 - Present",
                image: "/experience/tkd.png",
            },
            {
                name: "Marching band Gita Persada Mulawarman",
                date: "June 2017 - June 2019",
                image: "/experience/mb.png",
            },
        ]
    },
]

const About = () => {
    return (
        <div className='snap-y snap-mandatory overflow-auto h-screen p-8 scrollbar-hide'>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-8 pt-[120px] h-screen snap-start'>
                <AboutMe />
            </div>
            <div className='md:grid md:grid-cols-2 gap-8 h-screen snap-start flex flex-col items-center justify-center'>
                <Skills data={SkillsData} />
            </div>
            <div className='md:grid md:grid-cols-2 gap-8 h-screen snap-start flex flex-col items-center justify-center'>
                <Experiences data={ExperiencesData}/>
            </div>
        </div>
    )
}

export default About