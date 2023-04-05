import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Search.css'

const Search = () => {
    const [close, setclose] = useState(false)
    useEffect(() => {
        if (document.getElementById("body").classList.contains('menu-search')) {
            document.getElementById("body").classList.remove('menu-search', close);
        }
    }, [close]);

    return (
        <section className='search'>
            <div className="container-fluid">
                <Link to={void(0)} className='close-search' onClick={function(){setclose(!close)}}>
                    <i className="fa-solid fa-xmark"></i>
                </Link>

                <div className="content-search">
                    <form action="" method="get">
                        <div className="form">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                name="search"
                                maxLength="40"
                                autoFocus="autofocus"/>
                            <button className="btn btn-success" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Search
