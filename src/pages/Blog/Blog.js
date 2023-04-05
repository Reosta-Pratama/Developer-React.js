import React from 'react'
import FullBlog from '../../components/FullBlog/FullBlog'

const Blog = () => {
    return (
        <div className='main-container'>
            <section className="banner">
                <div className="container">
                    <div className="title">
                        <h2 className="sub-title">Our News</h2>
                        <h1 className="main-title">We create
                            <br/>
                            AWESOME Blog
                        </h1>
                    </div>
                </div>
            </section>

            <FullBlog></FullBlog>
        </div>
    )
}

export default Blog
