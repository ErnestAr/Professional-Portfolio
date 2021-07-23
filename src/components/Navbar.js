
import React from 'react'



export default function Navbar() {
  return (
      <>
        <header>
            <nav>
                <div className="nav-itm">
                    <h3 className="hv-nav"><a href="#aboutme">About</a></h3>
                </div>
                <div className="nav-itm">
                    <h3 className="hv-nav"><a href="#portfolio">Portfolio</a></h3>
                </div>
                <div className="nav-itm">
                    <h3 className="hv-nav"><a href="#contact">Contact</a></h3>
                </div>
                <div className="nav-itm">
                    <h3 className="hv-nav"><a href="../static/resources/Resume.pdf">Resume</a></h3>
                </div>
            </nav>    
            <div className="name">
                <img className="avatar" src="../static/resources/AvatarMaker (2).png" alt="Avatar"/>
                <h1 className="name-lrg">Ernest Arutiunian</h1>
                <h3 className="name-undr">Software Developer</h3>
            </div>
        </header>   
      </>
  )
}

