import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// image path 
import slider1 from '../Common/assets/image/slider.png'

// css path 
import '../Common/assets/css/package.css'


function Package() {
  return (
    <div>
      <Header />
      <section class="package-area py-5">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 col-xs-6 mb-5">
              <div class="package-rate position-relative">
                <div className='package-title'>
                  <h3 class="title text-center">Package</h3>
                  <p>6 மாதம் செல்லுபடியாகும்</p>
                  <p></p>
                </div>
                <div class="thum text-center">
                  <img src={slider1} alt="" />
                </div>
                <h1 class="text-center m-0 price-title">சாதாரண குழு</h1>
                <h2 class="price text-center m-0">1000</h2>
                <a class="text-center book-btn" href="#"><span> Book Package</span></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 col-xs-6 mb-5">
              <div class="package-rate position-relative">
                <div className='package-title'>
                  <h3 class="title text-center">Package</h3>
                  <p>6 மாதம் செல்லுபடியாகும்</p>
                  <p></p>
                </div>
                <div class="thum text-center">
                  <img src={slider1} alt="" />
                </div>
                <h1 class="text-center m-0 price-title">விஐபி குழு</h1>
                <h2 class="price text-center m-0">2000</h2>
                <a class="text-center book-btn" href="#"><span> Book Package</span></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 col-xs-6 mb-5">
              <div class="package-rate position-relative">
                <div className='package-title'>
                  <h3 class="title text-center">Package</h3>
                  <p>6 மாதம் செல்லுபடியாகும்</p>
                  <p></p>
                </div>
                <div class="thum text-center">
                  <img src={slider1} alt="" />
                </div>
                <h1 class="text-center m-0 price-title">விவிஐபி குழு</h1>
                <h2 class="price text-center m-0">3000</h2>
                <a class="text-center book-btn" href="#"><span> Book Package</span></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 col-xs-6 mb-5">
              <div class="package-rate position-relative">
                <div className='package-title'>
                  <h3 class="title text-center">Package</h3>
                  <p>6 மாதம் செல்லுபடியாகும்</p>
                  <p></p>
                </div>
                <div class="thum text-center">
                  <img src={slider1} alt="" />
                </div>
                <h1 class="text-center m-0 price-title">நட்சத்திரம் குழு</h1>
                <h2 class="price text-center m-0">5000</h2>
                <a class="text-center book-btn" href="#"><span> Book Package</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Package