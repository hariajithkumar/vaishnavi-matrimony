import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import slider1 from '../Common/assets/image/slider.png'


function Contact() {
  return (
    <div>
      <Header />
      <div className='container-70 contact-form'>
        <div className='login-field'>
          <div className='row m-0 p-3'>
            <div className='col-lg-6 col-12 p-0 profile-section contact-details'>
              <h3 className='py-2'>எங்களை தொடர்பு கொள்ள</h3>
              <hr />
              <p>செந்தில் குமார் : 99949 02887</p>
              <p>அலுவலகம் எண் : 99949 02887 , 99949 02887</p>
              <p>50,பெருமாள் கோயில் சாலை,பாப்பநாயக்கன் பாளையம்,கோவை-641037.</p>
              <p>கிளைகள் : திருச்சி ,ஈரோடு ,தாராபுரம்</p>
            </div>
            <div className='col-lg-6 col-12 mt-lg-0 mt-3 profile-section'>
              <h3 className='pb-2'>Enquiry Form</h3>
              <hr />
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Your Name</label>
                  <input type="text" class="form-control" placeholder='Enter your Name' />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="text" class="form-control" placeholder='Email' />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Message</label>
                  <textarea className="form-control" placeholder='Your Message'></textarea>
                </div>
              </form>
              <div>
                <button className='preview-btn'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact