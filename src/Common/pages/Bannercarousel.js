import React from 'react'

// image path 
import image1 from '../assets/image/matrimony7.jpg';
import image2 from '../assets/image/matrimony4.jpg';
import image3 from '../assets/image/matrimony2.jpg';
import image4 from '../assets/image/banner.jpg'

import '../assets/css/banner.css'


function Bannercarousel() {
    return (
        <div className='matrimony-carousel'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 zoom-in" alt="vaishnavi_matrimony" />
                        <span className='slide-top'>This is a full page for </span> <span className='slide-bottom'>best samples of matrimony profile</span>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 zoom-in" alt="vaishnavi_matrimony" />
                        <span className='slide-top'>Happy </span> <span className='slide-bottom'>Marriage</span>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 zoom-in" alt="vaishnavi_matrimony" />
                        <span className='slide-top'>Happy </span> <span className='slide-bottom'>Marriage</span>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Bannercarousel