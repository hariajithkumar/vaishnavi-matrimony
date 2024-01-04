import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

// image path 


import '../assets/css/banner.css'


function Bannercarousel() {

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const textToType = 'dream partner';

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < textToType.length) {
                setDisplayText((prevText) => prevText + textToType[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                // Stop the interval when all characters are typed
                clearInterval(intervalId);
            }
        }, 100);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [textToType, currentIndex]);

    // return <div>{displayText}</div>;

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='container-55'>
                        <h1 className=''><span>Find your </span>{displayText}</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='container-55'>
                        <h1 className=''><span>Find your </span>{displayText}</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='container-55'>
                        <h1 className=''><span>Find your </span>{displayText}</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>
                    </div>
                </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}

export default Bannercarousel