import React, { useState } from 'react';

import '../Common/assets/css/auth.css'

// file path 
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// image path 
import slider1 from '../Common/assets/image/carousel-img.png'

import { useDispatch, useSelector } from 'react-redux'
import { setregisterDetails } from '../Redux/CreateSlice';


const RegistrationForm = () => {
  const { registerDetails } = useSelector((state) => state.matrimony_profile)
  const [activeTab, setActiveTab] = useState(1);

  const dispatch = useDispatch();

  const handleTabChange = (event, tabValue) => {
    setActiveTab(tabValue);
    updateProgress(tabValue);
  };
  const next = () => {
    // if(registerDetails.name == ""){
    //   alert('please enter the value')
    // }else{
    setActiveTab(activeTab + 1);
    updateProgress(activeTab + 1);
    // }

  }
  const preview = () => {
    setActiveTab(activeTab - 1);
    updateProgress(activeTab - 1);
  }
  const register = () => {
    setActiveTab(activeTab + 1);
    updateProgress(activeTab + 1);
  }
  const updateProgress = (position) => {
    const length = 4; // Number of tabs
    if (position == 1) {
      const progressWidth = (position / length) * 0;
      document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    } else if (position == 2) {
      const progressWidth = (position / length) * 50;
      document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    } else if (position == 3) {
      const progressWidth = (position / length) * 65;
      document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    } else if (position == 4) {
      const progressWidth = (position / length) * 75;
      document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    } else {
      const progressWidth = (position / length) * 100;
      document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }

  };

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="py-4">
          <div className="position-relative mb-4" style={{ height: '2rem' }}>
            <div className="w-100 position-absolute top-50 start-50 translate-middle">
              <div className="progress" style={{ height: '.25rem' }}>
                <div
                  className="progress-bar"
                  id="progress-tab"
                  role="progressbar"
                  aria-valuenow={activeTab * 25}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <ul className="nav time-line nav-tabs border-0 w-100 hstack justify-content-between position-absolute top-50 start-50 translate-middle">
                {[1, 2, 3, 4, 5].map((tabValue) => (
                  <li className="nav-item" key={tabValue} role="presentation">
                    <button
                      type="button"
                      className={`btn btn-sm ${tabValue === activeTab ? 'btn-primary' : 'btn-secondary'} rounded-pill`}
                      style={{ width: '2rem', height: '2rem' }}
                      data-skk-value={tabValue}
                      onClick={(e) => handleTabChange(e, tabValue)}
                    >
                      {tabValue}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-content p-4">
            {[1, 2, 3, 4, 5].map((tabValue) => (
              <div
                key={tabValue}
                className={`tab-pane animate__animated animate__flipInX ${tabValue === activeTab ? 'active' : ''}`}
                id={`tab${tabValue}`}
              >
                {/* <h4 className="">Tab {tabValue}</h4> */}
                {tabValue == 1 ?
                  <>
                    <div className='container'>
                      <div className='row m-0 shadow p-0 bg-white rounded-3'>
                        <div className='col-lg-6 col-md-6 col-12 p-0 d-flex align-items-stretch'>
                          <img src={slider1} className='w-100 rounded-3' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 p-3'>
                          <div className='row m-0'>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Name*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your Name' required onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, name: e.target.value }))} />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">DOB*</label>
                                <input type="date" class="form-control" aria-describedby="emailHelp" required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Age*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your Age' required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Education*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your Education' required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Work*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your work' required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">WorkPlace*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your workplace' required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Monthly Income*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your Monthlyincome' required />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                              <div class="mb-3">
                                <label class="form-label">Yearly Income*</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Enter your workplace' required />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </> :
                  <></>
                }


              </div>
            ))}
          </div>
          <div className='w-25 mx-auto  p-3 mb-5 rounded-3 text-center'>
            {activeTab == 5 ? <></> :
              <>
                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
              </>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default RegistrationForm;
