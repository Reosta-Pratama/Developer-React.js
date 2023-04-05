import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className='start'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text">
                            <h1 className="title">
                                Sharing
                                <br/>
                                Your Vision
                            </h1>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text">
                            <p className="desc">Efficiently plagiarize leveraged quality vectors whereas
                                principle-centered human capital. Dramatically initiate intermandated quality
                                vectors before web-enabled innovation.</p>

                            <Link className="button" to="/contact">start project</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid"></div>
        </section>
    )
}

export default Hero