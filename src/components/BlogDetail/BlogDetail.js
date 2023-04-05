import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import './BlogDetail.css'

const BlogDetailComponent = () => {
    const params = useParams()
    const [blogs, setblogs] = useState({})

    useEffect(() => {
        async function getBlog() {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`
            )
            const result = await request.json()

            setblogs(result)
        }

        getBlog()
    }, [params]);

    return (
        <section className='detail-blog'>
            <div className="container">
                <div className="images">
                    <img src={blogs.imageUrl} alt={blogs.imageUrl} className="img-fluid"/>
                </div>
            </div>

            <div className="container mx-800">
                <div className="content-blog">
                    <ul className="tag">
                        <li>
                            <Link to=''>{blogs.newsSite}</Link>
                        </li>
                    </ul>

                    <div className="head">
                        <div className="title">
                            <h1>{blogs.title}</h1>
                        </div>

                        <div className="date">
                            <span>{blogs.newsSite}</span>
                            <span>{new Date(blogs.publishedAt).toLocaleDateString()}</span>
                        </div>

                        <div className="sub-title">
                            <h2>{blogs.newsSite}</h2>
                        </div>
                    </div>

                    <div className="desc">
                        <p>{blogs.summary}</p>
                    </div>

                    <ul className="tag">
                        <li>
                            <Link to=''>#{blogs.newsSite}</Link>
                        </li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Link to='' className='hover'>
                            <div className="link">
                                <p>Prev News</p>
                                <h3>{blogs.title}</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to='' className='hover'>
                            <div className="link">
                                <p>Next News</p>
                                <h3>{blogs.title}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailComponent