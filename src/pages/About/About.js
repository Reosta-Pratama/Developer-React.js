import React from 'react'
import AboutComponent from '../../components/About/About'
import '../../components/Banner/BannerAbout.css'

const About = () => {
    return (
        <div className='main-container'>
            <section className="banner-photo">
                <div className="container">
                    <div className="title">
                        <h1 className="main-title">We a graphic
                            <span>
                                <em>design agency</em>
                            </span><br/>
                            forvisually compelling stories.
                        </h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="images">
                                <img src="/img/portfolio/port-1.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="images">
                                <img src="/img/portfolio/port-1.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="images">
                                <img src="/img/portfolio/port-1.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="images">
                                <img src="/img/portfolio/port-1.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="images">
                                <img src="/img/portfolio/port-1.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutComponent></AboutComponent>
        </div>
    )
}

export default About
