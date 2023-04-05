import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {useCookies} from 'react-cookie'

const Header = () => {
    const [scroll, setscroll] = useState(false)
    const [cookies, setCookie] = useCookies(['Theme']);

    useEffect(() => {
        function getScroll() {
            window.addEventListener("scroll", function () {
                setscroll(window.scrollY > 300);
            })
        }

        getScroll()
    }, []);

    function toggleMode() {
        if (!document.getElementById("body").classList.contains('dark-theme')) {
            setCookie('Theme', "dark-theme", {path: '/'});
        } else {
            setCookie('Theme', "light-theme", {path: '/'});
        }
    }

    function getSearch() {
        document
            .getElementById("body")
            .classList
            .add('menu-search')
    }

    function getMobile() {
        document
            .getElementById("body")
            .classList
            .toggle('open-menu');

        document
            .getElementById("menu")
            .classList
            .toggle('animation');
    }

    return (
        <header
            id='header'
            className={!scroll
                ? "header"
                : "header header-change"}
            onMouseOver={function () {
                setscroll(false)
            }}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img className="img-fluid" src="../img/logo/logo.png" alt=""/>
                    </Link>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link className='nav-link' to='/' title='Home'>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/portfolio' title='Portfolio'>
                                <p>Portfolio</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/news' title='News'>
                                <p>News</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/about' title='About'>
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/contact' title='Contact'>
                                <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="other">
                    <div className="icon">
                        <Link to={void(0)}>
                            {
                                cookies.Theme === "light-theme"
                                    ? (<i className="fa-solid fa-lightbulb" onClick={toggleMode}></i>)
                                    : <i className="fa-solid fa-moon" onClick={toggleMode}></i>
                            }
                        </Link>
                    </div>

                    <div className="icon">
                        <Link to={void(0)} onClick={getSearch}>
                            <i className="fa-solid fa-magnifying-glass toggle-search"></i>
                        </Link>
                    </div>

                    <Link id='menu' className="menu" to={void(0)} onClick={getMobile}>
                        <span className="title-menu">Menu</span>
                        <div className="hamburger" id="hamburger-6">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </Link>
                </div>

                <div className="burger">
                    <img src="/img/icon/hamburger.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </header>
    )
}

export default Header
