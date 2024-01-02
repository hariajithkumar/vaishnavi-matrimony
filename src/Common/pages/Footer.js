import React from 'react'


// css link 
import '../assets/css/banner.css'


// image path 
import logo from '../assets/image/footer-logo.png'
import facebook from '../assets/image/Facebook.png'
import instagram from '../assets/image/Instagram.png'
import x from '../assets/image/X.png'
import youtube from '../assets/image/Youtube.png'


function Footer() {
    return (
        <footer>
            <div className='container-90'>
                <div className='row m-0 py-5 footer-content align-items-stretch justify-content-center'>
                    <div className='col-lg-2 col-12 text-center footer-logo'>
                        <img src={logo} className='w-75'/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 ps-lg-5 ps-md-5 ps-2 mt-lg-0 mt-3'>
                        <h5>Quick Links</h5>
                        <ul className='p-0'>
                            <li className=''>முகப்பு</li>
                            <li  className=''>தொகை பற்றி விவரம்</li>
                            <li  className=''>தொடர்புக்கு</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 ps-2 mt-lg-0 mt-3'>
                        <h5>Address</h5>
                        {/* <p className='address'>50,பெருமாள் கோயில் சாலை,பாப்பநாயக்கன் பாளையம், கோவை-641037</p> */}
                        <ul className='p-0'>
                            <li className='nav-item'>50,பெருமாள் கோயில் சாலை,பாப்பநாயக்கன் பாளையம்,கோவை-641037</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12  ps-lg-5 ps-md-5 ps-2 mt-lg-0 mt-3'>
                        <h5>Contact</h5>
                        <ul className='p-0'>
                            <li className=''>+91 99949 02887</li>
                            <li  className=''>+91 90034 10060ம்</li>
                            <li  className=''><img src={facebook} /> <img src={instagram} className=''/> <img src={x} className=''/> <img src={youtube} /></li>
                        </ul>
                    </div>
                </div>
                <hr className=''/>
                <div className='row m-0 footer-bottom'>
                    <div className='col-lg-4 col-12  d-flex justify-content-lg-start justify-content-center align-items-center'>
                        <p className='m-0 '>Copyright © 2024 Vaishnavimatrimony</p>
                    </div>
                    <div className='col-lg-4 col-12 my-lg-0 my-3 text-center d-flex justify-content-center align-items-center'>
                        <ul className='nav d-flex justify-content-center'>
                            <li className='nav-item'>Privacy Policy</li>
                            <li className='nav-item'>Terms of Service</li>
                            <li className='nav-item'>Cookies Settings</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-12 text-center d-flex justify-content-lg-end justify-content-center align-items-center'>
                        <p className='m-0'>Designed by <span>Webbitech.com</span></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer