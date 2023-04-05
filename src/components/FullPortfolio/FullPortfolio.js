import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './FullPortfolio.css'

const FullPortfolio = () => {
    const [portfolios, setportfolios] = useState([])
    useEffect(() => {
        async function getPortfolio() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const result = await request.json()

            setportfolios(result)
        }

        getPortfolio();
    }, []);

    return (
        <section className='fullPorfolio'>
            <div className="container">
                <form className='category'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="selection">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="category">
                                    <option value="">Categories</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="selection">
                                <select className="form-select" aria-label="Default select example" name="tag">
                                    <option value="">Tags</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="selection">
                                <select className="form-select" aria-label="Default select example" name="sort">
                                    <option value="">Sort By</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="selection">
                                <input className="submit" type="submit" value="Search"/>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    {
                        portfolios.map(function (portfolio) {
                            return (
                                <div key={portfolio.id} className="col-md-6">
                                    <Link to={`/portfolio/${portfolio.id}`}>
                                        <div className="content-portfolio">
                                            <img
                                                src={portfolio.imageUrl}
                                                alt={portfolio.imageUrl + " Image"}
                                                className="img-fluid"/>
                                            <div className="effect"></div>
                                            <div className="desc">
                                                <div className="container-text">
                                                    <h3 className="sub-title">{portfolio.title}</h3>
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
            </div>
        </section>
    )
}

export default FullPortfolio
