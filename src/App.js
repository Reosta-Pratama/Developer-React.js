import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./body/Header/Header";
import Home from './pages/Home/Home';
import './App.css'
import './ToggleColor.css'
import './components/Banner/Banner.css'
import Footer from './body/Footer/Footer';
import Portfolio from './pages/Portofolio/Portfolio';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PortfolioDetail from './pages/Portofolio/PortfolioDetail';
import BlogDetail from './pages/Blog/BlogDetail';
import Search from './body/Search/Search';
import {useCookies} from 'react-cookie';
import {useEffect} from 'react';

function App() {
    const [cookies] = useCookies(['Theme']);
    useEffect(() => {
        if (cookies.Theme === 'dark-theme') {
            document
                .getElementById("body")
                .classList
                .add('dark-theme')
            document
                .getElementById("body")
                .classList
                .remove('light-theme')
        } else {
            document
                .getElementById("body")
                .classList
                .remove('dark-theme')
            document
                .getElementById("body")
                .classList
                .add('light-theme')
        }
    }, [cookies.Theme]);
    
    return (
        <div id='body' className='body'>
            <Router>
                <Header></Header>
                <Search></Search>

                <Routes>
                    <Route path="/" exact="exact" Component={Home}></Route>
                    <Route path="/portfolio" exact="exact" Component={Portfolio}></Route>
                    <Route path="/portfolio/:id" exact="exact" Component={PortfolioDetail}></Route>
                    <Route path="/news" exact="exact" Component={Blog}></Route>
                    <Route path="/news/:id" exact="exact" Component={BlogDetail}></Route>
                    <Route path="/about" exact="exact" Component={About}></Route>
                    <Route path="/contact" exact="exact" Component={Contact}></Route>
                </Routes>

                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
