import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        async function getBlog() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs?_limit=3')
            const result = await request.json()

            setblogs(result)
        }

        getBlog()
    }, []);

    return (
        <section className='blog'>
            <div className="container">
                <div className="text">
                    <h2 className="title">
                        Some Pieces
                        <br/>
                        of the Newsletter
                    </h2>
                </div>

                <div className="row">
                    {
                        blogs.map(function (blog) {
                            return (
                                <div key={blog.id} className="col-md-6 col-lg-4">
                                    <div className="content-blog">
                                        <div className="images">
                                            <Link to={`/news/${blog.id}`}>
                                                <img src={blog.imageUrl} alt={blog.imageUrl + " Image"} className="img-fluid"/></Link>
                                        </div>

                                        <div className="desc">
                                            <Link to={`/news/${blog.id}`}>
                                                <h3 className="sub-title">
                                                    {
                                                        blog.title.length > 40
                                                            ? `${blog
                                                                .title
                                                                .substring(0, 40)}...`
                                                            : blog.title
                                                    }
                                                </h3>
                                            </Link>
                                            <p className="sub-desc">
                                                {
                                                    blog.summary.length > 100
                                                        ? `${blog
                                                            .summary
                                                            .substring(0, 100)}...`
                                                        : blog.summary
                                                }</p>
                                        </div>

                                        <div className="publisher">
                                            <div className="avatar">
                                                <img
                                                    src="/img/testimonial/test-1.png"
                                                    alt="/img/testimonial/test-1.png"
                                                    className="img-fluid"/>
                                            </div>

                                            <div className="name">
                                                <h3 className="username">Admin</h3>
                                                <p className="date">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog
