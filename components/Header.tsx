import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg pb-20">
                <div>
                    <button>Software Developer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:contact@Vedant Dubey.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/vedantdubey.png" width={280} height={280} className='ml-12' alt="Vedant Dubey"  /> 
            </div>
        </header>
    )
}