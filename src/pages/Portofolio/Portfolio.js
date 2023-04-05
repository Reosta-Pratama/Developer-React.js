import React from 'react'
import FullPortfolio from '../../components/FullPortfolio/FullPortfolio'

const Portfolio = () => {
    return (
        <div className='main-container'>
            <section className='banner'>
                <div className="container">
                    <div className="title">
                        <h2 className="sub-title">Our Works</h2>
                        <h1 className="main-title">Portfolio
                        </h1>
                    </div>
                </div>
            </section>

            <FullPortfolio></FullPortfolio>
        </div>
    )
}

export default Portfolio
