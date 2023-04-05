import React from 'react'
import './Testimonial.css'
import OwlCarousel from 'react-owl-carousel2'
import '../../../node_modules/react-owl-carousel2/lib/styles.css';

const Testimonial = () => {
    const options = {
        loop: true,
        margin: 40,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    const events = {
        onDragged: function (event) {},
        onChanged: function (event) {}
    };

    return (
        <section className='testimonial'>
            <div className="container">
                <div className="text">
                    <h2 className="title">
                        Some Reviews From
                        <br/>
                        Clients Abous Us
                    </h2>
                </div>

                <OwlCarousel options={options} events={events}>
                    <div className="item">
                        <div className="content-item">
                            <div className="desc">
                                <p>Professionally productize customized imperatives and fully tested interfaces.
                                    Proactively redefine standardized markets through cross-unit methodologies.</p>
                            </div>

                            <div className="profile">
                                <div className="avatar">
                                    <img
                                        src="/img/testimonial/test-1.png"
                                        alt="/img/testimonial/test-1.png"
                                        className="img-fluid"/>
                                </div>

                                <div className="name">
                                    <h3 className="username">John Doe</h3>
                                    <p className="job">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content-item">
                            <div className="desc">
                                <p>Professionally productize customized imperatives and fully tested interfaces.
                                    Proactively redefine standardized markets through cross-unit methodologies.</p>
                            </div>

                            <div className="profile">
                                <div className="avatar">
                                    <img
                                        src="/img/testimonial/test-1.png"
                                        alt="/img/testimonial/test-1.png"
                                        className="img-fluid"/>
                                </div>

                                <div className="name">
                                    <h3 className="username">John Doe</h3>
                                    <p className="job">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content-item">
                            <div className="desc">
                                <p>Professionally productize customized imperatives and fully tested interfaces.
                                    Proactively redefine standardized markets through cross-unit methodologies.</p>
                            </div>

                            <div className="profile">
                                <div className="avatar">
                                    <img
                                        src="/img/testimonial/test-1.png"
                                        alt="/img/testimonial/test-1.png"
                                        className="img-fluid"/>
                                </div>

                                <div className="name">
                                    <h3 className="username">John Doe</h3>
                                    <p className="job">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial
