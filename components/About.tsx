import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Frontend Developer"
                        icon="/icons/design.svg"
                        description="I excel at seamlessly transforming Figma designs into high-quality, functional web implementations!"
                        projects={6} />
                    <AboutCard
                        title="Backend Developer"
                        icon="/icons/code.svg"
                        description="I have experience in integrating sockets, blockchains, AI and many features with Nodejs"
                        projects={3} />
                    <AboutCard
                        title="Team Leader"
                        icon="/icons/phone.svg"
                        description="I have successfully managed multiple teams, fostering collaboration, ensuring communication, and delivering high-quality results efficiently"
                        projects={4} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Vedant Dubey</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I am a passionate Developer with a knack for creating impactful digital experiences. My entrepreneurial experience as a co-founder has honed my leadership and product development skills. I thrive at the intersection
of technology and innovation, constantly striving to transform ideas into seamless, user-focused applications.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

           
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} years of experience</span>
        </div>
    )
}