import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
    const [portfolios, setportfolios] = useState([])
    useEffect(() => {
        async function getPortfolio() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=3')
            const result = await request.json()

            setportfolios(result)
        }

        getPortfolio();
    }, []);

    return (
        <section className='portfolio'>
            <div className="container">
                <div className="text">
                    <h2 className="title">
                        Our Awesome Portfolio
                    </h2>
                </div>

                <div className="row">
                    {
                        portfolios.map(function (portfolio) {
                            return (
                                <div className="col-md-6 col-lg-4" key={portfolio.id}>
                                    <Link to={`/portfolio/${portfolio.id}`}>
                                        <div className="content-portfolio">
                                            <img
                                                src={portfolio.imageUrl}
                                                alt={portfolio.title + " Image"}
                                                className="img-fluid"/>
                                            <div className="effect"></div>
                                            <div className="desc">
                                                <div className="container-text">
                                                    <h3 className="sub-title">
                                                        {portfolio.title}
                                                    </h3>
                                                    <p className="category">{portfolio.newsSite}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <Link className="more" to='/portfolio'>
                    <div className="content-circle">
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="circle-icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="view">
                        <div className="text-view">take a look</div>
                        <div className="border-view"></div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Portfolio
