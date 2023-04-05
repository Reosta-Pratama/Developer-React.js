import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    function backTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <footer className='footer'>
            <div className="container">
                <div className="title">
                    <div className="content-title">
                        <div className="title-top">
                            <p>Got a
                                <strong>project</strong>
                            </p>
                        </div>

                        <div className="row title-bottom">
                            <div className="col-lg-7 left">
                                <p>in mind?</p>
                            </div>

                            <div className="col-lg-5 right">
                                <Link to="/contact">
                                    <span>let's talk</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="content-footer">
                            <div className="sosmed">
                                <Link to="">Twitter</Link>
                                <h2>reosta</h2>
                            </div>

                            <div className="icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="content-footer">
                            <div className="sosmed">
                                <Link to="">Twitter</Link>
                                <h2>reosta</h2>
                            </div>

                            <div className="icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="content-footer">
                            <div className="sosmed">
                                <Link to="">Twitter</Link>
                                <h2>reosta</h2>
                            </div>

                            <div className="icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>

                    <div className="copy">
                        <h2>
                            &copy; {new Date().getFullYear() + " "}
                            Developer, All Rights Reserved.</h2>

                        <Link to={void(0)} className="top-button" onClick={backTop}>
                            <h2>Back to Top</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
