import React from 'react'

// import '../Common/assets/css/auth.css'

// file path 
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// image path 
import slider1 from '../Common/assets/image/slider.png'
import success from '../Common/assets/image/success.gif'


import { useDispatch, useSelector } from 'react-redux'


function Login() {
    const { registerDetails } = useSelector((state) => state.matrimony_profile)

    return (
        <div>
            <Header />
            <div className='container-70 '>
                <div className='register-field'>
                    <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                            <img src={slider1} className='w-100' />
                        </div>
                        <div className='col-lg-6'>
                            <h1>Login Now</h1>
                            <p>Enter your phone number & password to login</p>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">phone number</label>
                                    <input type="text" class="form-control" placeholder='Enter your Phonenumber' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Passowrd</label>
                                    <input type="text" class="form-control" placeholder='Password' />
                                </div>
                            </form>
                            <div>
                                <button className='preview-btn'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login