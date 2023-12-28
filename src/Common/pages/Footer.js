import React from 'react'


// css link 
import '../assets/css/banner.css'

function Footer() {
    return (
        <footer>
            <div className='row m-0'>
                <div className='col-lg-4 col-md-4 col-12 text-center d-flex justify-content-center align-items-center'>
                    <p className='m-0 '>@ 2023 All rights reserved</p>
                </div>
                <div className='col-lg-4 col-md-4 col-12 my-lg-0 my-md-0 my-3 text-center d-flex justify-content-center align-items-center'>
                    <ul className='nav d-flex justify-content-center'>
                        <li className='nav-item'>முகப்பு</li>
                        <li className='nav-item'>தொகை விவரங்கள்</li>
                        <li className='nav-item'>தொடர்பு</li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-12 text-center d-flex justify-content-center align-items-center'>
                    <p className='m-0'>Designed by Webbitech.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer