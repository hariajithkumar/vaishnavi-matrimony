import React from 'react'
import Header from '../Common/pages/Header'
import Bannercarousel from '../Common/pages/Bannercarousel'


// css link 
import '../Common/assets/css/main.css'

// image path 
import profile from '../Common/assets/image/profile.jpeg'
import Footer from '../Common/pages/Footer'
// import border from '../Common/assets/image/border1.png'

function Home() {
    return (
        <div>
            <Header />
            <Bannercarousel />
            <section className='py-3'>
                <div className='container-90 profile-section'>
                    {/* <img src={} /> */}
                    <div className='row m-0 align-items-stretch'>
                        <div className='col-6'>
                            <div className="card mb-3 profile-card">
                                <div className="row m-0">
                                    <div className="col-md-6">
                                        <img src={profile} className="w-100 p-2" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <p>உங்கள் வாழ்க்கைத் துணையைத் தேர்ந்தெடுக்க இதுவே சரியான தருணம்.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='profile-card'>
                                <iframe className='rounded-3' width="100%" height="100%" src="https://www.youtube.com/embed/Bsj8btRiKuE?si=yAfOauBujpDvN_OQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home