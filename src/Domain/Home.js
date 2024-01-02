import React from 'react'

// file path 
import Header from '../Common/pages/Header'
import Bannercarousel from '../Common/pages/Bannercarousel'
import Footer from '../Common/pages/Footer'

// css link 
import '../Common/assets/css/main.css'

// image path 
import owner from '../Common/assets/image/owner.png'
import logo1 from '../Common/assets/image/logo-1.png'
import logo2 from '../Common/assets/image/logo-2.png'
import logo3 from '../Common/assets/image/logo-3.png'
import logo4 from '../Common/assets/image/logo-4.png'

function Home() {
    return (
        <div>
            <Header />
            <Bannercarousel />
            <section className='py-5'>
                <div className='container-90'>
                    <div className='row m-0 profile-section'>
                        <div className='col-lg-8 col-12'>
                            <div className='row m-0'>
                                <div className='col-lg-5 col-md-5  col-12 d-flex align-items-stretch'>
                                    <img src={owner} className='w-100 ' />
                                </div>
                                <div className='col-lg-7 col-md-7 col-12 py-5'>
                                    <h3>எங்களது சேவை</h3>
                                    <hr />
                                    <div className='row m-0'>
                                        <div className='col-2 py-2 px-0'>
                                            <img src={logo1} className='pe-3 w-75' />
                                        </div>
                                        <div className='col-10 p-0 d-flex justify-content-start align-items-center '>
                                            <h5>100% கஸ்டமர் பாதுகாப்பு</h5>
                                        </div>
                                        <div className='col-2 py-2 px-0'>
                                            <img src={logo2} className=' pe-3 w-75' />
                                        </div>
                                        <div className='col-10 p-0 d-flex justify-content-start align-items-center '>
                                            <h5>100% கஸ்டமர் பாதுகாப்பு</h5>
                                        </div>
                                        <div className='col-2 py-2 px-0'>
                                            <img src={logo3} className=' pe-3 w-75' />
                                        </div>
                                        <div className='col-10 p-0 d-flex justify-content-start align-items-center py-2'>
                                            <h5>100% பணம் திரும்ப பெரும் வாய்ப்பு (ஒரு வருடத்திற்குள் திருமணம் நடைபெறாவிடில்)</h5>
                                        </div>
                                        <div className='col-2 py-2 px-0'>
                                            <img src={logo4} className=' pe-3 w-75' />
                                        </div>
                                        <div className='col-10 p-0 d-flex justify-content-start align-items-center py-2'>
                                            <h5>இலவச சேவை (கல்யாணம் உறுதி செய்யும் வரை)</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12 mt-lg-0 mt-3'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0EzhlUTldmk?si=K7ex7ag48pnp56Bs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Home