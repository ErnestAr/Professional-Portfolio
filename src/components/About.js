
import React from 'react'
import Footer from './Footer'

export default function About()  {
    return (
        <>
            <main>
                <section className="aboutme" id="aboutme">
                    <h2 className="abt-ttl">About me</h2>
                    <div className="abt-cont">
                        <h3 className="my-0">Professional Overview</h3>
                        <p> 
                            Little bit about myself: My name is Ernest Arutiunian, I'm a software Developer from Ontario, Canada. I specialiaze in full-stack web development, including browser based and mobile web applications. You can have a look at some of my work in the project section.
                        </p>
                        <h3 className="my-0">Skill Set</h3>
                        <div className="skills" >
                            <p className="skill">JavaScript</p>
                            <p className="skill">Python 3</p>
                            <p className="skill">CSS</p>
                            <p className="skill">HTML5</p>
                            <p className="skill">jQuery</p>
                            <p className="skill">SQL</p>
                        </div>
                    </div>
                </section>
                <section className="portfolio" id="portfolio">
                    <h2 className="pf-ttl">Portfolio</h2>
                    <div className="pf-cont">
                        <div className="pjct-1 opn" name="off">
                            <div className="pjct-text">
                                <h3>Trade Guide</h3>
                                <p style={{display: "inline"}}>Trade Guide is a web application intended to simplify learning experience for users intrested in investing. The application allows you to access information about</p>
                                <p className="rmore">read more...</p>
                                <p className="hide"> different investment possibilities within user friendly interface and provides up to date text informaiton and visuals to better your learning experience.</p>
                                <div className="tools" >
                                    <p className="skill">JavaScript</p>
                                    <p className="skill">CSS</p>
                                    <p className="skill">HTML5</p>
                                    <p className="skill">jQuery</p>
                                    <p className="skill">Bootstrap</p>
                                    <p className="skill">Tailwind CSS</p>
                                    <p className="skill">Charts.js</p>
                                    <a className ="gitlink" href="https://github.com/ErnestAr/Trade_Guide">GitHub Repository</a>
                                </div>
                            </div>
                            <img className="pjct-img  img1"  src="../public/resources/Screenshot 2021-06-04 203351.png" alt="Project 1 Image" />
                        </div>
                        <div className="pjct-2 opn" name="off">
                            <div className="pjct-text">
                                <h3>Coding Tool Hub</h3>
                                <p style={{display: "inline"}}>Coding Tool Hub" is a web based application that allows developers to  share technologies they have designed to simplify the process of software engineering and for users to browse and save available technologies to</p> <p className="rmore">read more...</p>
                            
                                <p className="hide">  make faster progress and be more efficient in their work.</p>
                                <div className="tools">
                                    <p className="skill">JavaScript</p>
                                    <p className="skill">CSS</p>
                                    <p className="skill">HTML5</p>
                                    <p className="skill">JawsDB</p>
                                    <p className="skill">SQL</p>
                                    <p className="skill">Sequelize.js</p>
                                    <p className="skill">Handlebars</p>
                                    <p className="skill">MySQL2,js</p>
                                    <a className ="gitlink" href="https://github.com/ErnestAr/Cooding-Tool-Hub">GitHub Repository</a>
                                </div>
                            </div>
                            <img className="pjct-img img2"  src="../public/resources/Screenshot 2021-07-06 195036.png" alt="Project 1 Image" />
                        </div>
                        <div className="pjct-3 opn" name="off">
                            <div className="pjct-text" >
                                <h3>Web Quiz</h3>
                                <p style={{display: "inline"}}>Web Quiz is designed to offer interactive quiz experience for the user, with easy to navigate buttons and menus. It incorporates local storage to store results. <p className="rmore">read more...</p>
                                </p>
                                <div className="tools" style={{margin: '0px'}}>
                                    <p className="skill">JavaScript</p>
                                    <p className="skill">CSS</p>
                                    <p className="skill">HTML5</p>
                                    <p className="skill">jQuery</p>
                                    <a className ="gitlink" href="https://github.com/ErnestAr/Weather_Forecast">GitHub Repository</a>
                                </div>
                            </div>
                            <img className="pjct-img img3"  src="../public/resources/Screenshot 2021-06-04 203323.png" alt="Project 1 Image"/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
   
}