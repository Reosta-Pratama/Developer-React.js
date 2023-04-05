import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './FullBlog.css'

const FullBlog = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        async function getBlog() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            const result = await request.json()

            setblogs(result)
        }

        getBlog()
    }, []);

    return (
        <section className='fullBlog'>
            <div className="container">
                <div className="row pad">
                    <div className="col-lg-8">
                        <div className="content-blog">
                            <div className="row">
                                {
                                    blogs.map(function (blog) {
                                        return (
                                            <div key={blog.id} className="col-12">
                                                <div className="card-blog">
                                                    <div className="images">
                                                        <Link to={`/news/${blog.id}`}><img src={blog.imageUrl} alt={blog.imageUrl + " Image"} className="img-fluid"/></Link>
                                                    </div>

                                                    <ul className="tag">
                                                        <li>
                                                            <Link to=''>{blog.newsSite}</Link>
                                                        </li>
                                                    </ul>

                                                    <div className="desc">
                                                        <h3 className="sub-title">
                                                            <Link to={`/news/${blog.id}`}>{blog.title}</Link>
                                                        </h3>
                                                        <p className="sub-desc">{blog.summary}</p>
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
                    </div>

                    <div className="col-lg-4">
                        <div className="content-desc">
                            <div className="recent">
                                <div className="sub-title">
                                    <h4>Recent Posts</h4>
                                </div>

                                <ul>
                                    {
                                        blogs.map(function (blog) {
                                            return (
                                                <li key={blog.id}>
                                                    <div className="images">
                                                        <Link to=''>
                                                            <img src={blog.imageUrl} alt={blog.imageUrl + " Image"} className="img-fluid"/>
                                                        </Link>
                                                    </div>

                                                    <div className="desc">
                                                        <p className="name">
                                                            <Link to=''>
                                                                {blog.title}
                                                            </Link>
                                                        </p>

                                                        <p className="date">
                                                            {new Date(blog.publishedAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <div className="categories">
                                    <div className="sub-title">
                                        <h4>Categories</h4>
                                    </div>

                                    <ul>
                                        {
                                            blogs.map(function (blog) {
                                                return (
                                                    <li key={blog.id}>
                                                        <Link to=''>{blog.newsSite}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div className="tag">
                                    <div className="sub-title">
                                        <h4>Tag</h4>
                                    </div>

                                    <ul>
                                        {
                                            blogs.map(function (blog) {
                                                return (
                                                    <li key={blog.id}>
                                                        <Link to=''>#{blog.newsSite}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullBlog
