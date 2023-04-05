import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import './PortfolioDetail.css'

const PortfolioDetailComponent = () => {
    const params = useParams()
    const [portfolios, setportfolios] = useState({})

    useEffect(() => {
        async function getPortfolio() {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
            )
            const result = await request.json()

            setportfolios(result)
        }

        getPortfolio()
    }, [params]);

    return (
        <section className='detail-portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 bot-80">
                        <div className="content-portfolio">
                            <h1>{portfolios.title}</h1>
                        </div>
                    </div>

                    <div className="col-lg-6 bot-80">
                        <div className="content-portfolio">
                            <div className="desc">
                                <p>{portfolios.summary}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 bot-80">
                        <div className="content-portfolio">
                            <div className="head">
                                <h2>Category:</h2>
                            </div>

                            <div className="sub-head">
                                <Link to=''>
                                    <h2>{portfolios.newsSite}</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 bot-80">
                        <div className="content-portfolio">
                            <div className="head">
                                <h2>Price:</h2>
                            </div>

                            <div className="sub-head">
                                <h2>Rp.100.000</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 bot-80">
                        <div className="content-portfolio">
                            <div className="head">
                                <Link to=''>#{portfolios.newsSite}</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 bot-80">
                        <div className="content-portfolio">
                            <div className="button">
                                <Link to='' className='btn'>Buy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="images">
                    <Link to='https://reostapratama.tech/' target='_blank'>
                        <img src={portfolios.imageUrl} alt={portfolios.imageUrl} className="img-fluid"/>
                    </Link>
                </div>

                <div className="button">
                    <Link className="btn" to='https://reostapratama.tech/' target='_blank'>Live Preview</Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioDetailComponent
