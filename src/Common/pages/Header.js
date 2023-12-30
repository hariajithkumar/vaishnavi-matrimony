import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

// css link 
import '../assets/css/banner.css'

// fontawesome link 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

// image path 

import logo from '../assets/image/logo.png'


// state change 
import { setClass1Hide } from '../../Redux/CreateSlice';


function Header() {

    const { isClass1Show } = useSelector((state) => state.matrimony_profile)
    const[isNavshow,setNavshow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;

    const navButton = () => {
        if (isClass1Show == false) {
            dispatch(setClass1Hide(true))
        } else {
            dispatch(setClass1Hide(false))
        }
    }

    const navBtn = () => {
        setNavshow(true)
    }


    return (
        <>
            <header className='header-section position-sticky top-0'>
                <nav className="navbar navbar-expand-lg container-90">
                    <div className="container-fluid">
                        <a className="navbar-brand logo-section" href="#"><img src={logo} className='logo-img' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={navBtn}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-list">
                                <li className="nav-item">
                                    <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                        முகப்பு
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to={{ pathname: '/package' }} className={`${pathname === '/package' ? 'active' : 'custom-active'} text-decoration-none`}>
                                        தொகை விவரங்கள்
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to={{ pathname: '/contact' }} className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                        தொடர்பு
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn login-btn" type="button">Login</button>
                                <button className="btn register-btn" type="button">Register Now</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Header