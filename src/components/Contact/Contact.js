import React from 'react'
import {Link} from 'react-router-dom'
import './Contact.css'

const ContactComponent = () => {
    return (
        <section className='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content-contact">
                            <div className="title">
                                <h1>Got A Project Or
                                    <br/>
                                    A Partnership In Mind?</h1>
                            </div>

                            <div className="desc">
                                <p>Holisticly leverage other’s user friendly platforms with progressive
                                    products. Proactively matrix exceptional content through B2C schemas. Seamlessly
                                    exploit cutting-edge niche markets rather than premium results. Collaboratively
                                    restore pandemic e-business and plug-and-play data. Conveniently target
                                    exceptional platforms whereas standards compliant data.</p>
                            </div>

                            <ul>
                                <li>
                                    <h4>Phone:
                                    </h4>
                                    <Link to=''>+62 821 6907 6600</Link>
                                </li>
                                <li>
                                    <h4>Phone:
                                    </h4>
                                    <Link to=''>+62 821 6907 6600</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent