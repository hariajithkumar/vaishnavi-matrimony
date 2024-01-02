import React, { useState } from 'react';

import '../Common/assets/css/auth.css'

// file path 
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// image path 
import slider1 from '../Common/assets/image/slider.png'
import success from '../Common/assets/image/success.gif'

import { useDispatch, useSelector } from 'react-redux'
import { setregisterDetails } from '../Redux/CreateSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const RegistrationForm = () => {
  const { registerDetails } = useSelector((state) => state.matrimony_profile)
  const [activeTab, setActiveTab] = useState(1);
  const [nextProcess, setNextProcess] = useState([])
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
    setNextProcess([...nextProcess, activeTab])
  }
  const preview = () => {
    setActiveTab(activeTab - 1);
    updateProgress(activeTab - 1);
  }
  const register = () => {
    setActiveTab(activeTab + 1);
    updateProgress(activeTab + 1);
  }
  const [dob, setDob] = useState('');
  const [isDateInput, setIsDateInput] = useState(false);

  const handleFocus = () => {
    setIsDateInput(true);
  };

  const handleBlur = () => {
    setIsDateInput(false);
  };

  const handleChange = (e) => {
    setDob(e.target.value);
  };
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
      <section className='py-5 register-form'>
        <h1>Let’s start building your profile</h1>
        <p>We will help you to find perfect match based on the details you enter here</p>
        <div className="py-4">
          <div className="py-4">
            <div className='container-75'>
              <div className="position-relative mb-4" style={{ height: '2rem' }}>
                <div className="w-100 position-absolute top-50 start-50 translate-middle">
                  <div className="progress" style={{ height: '.25rem', width: '95%', margin: '0 auto' }}>
                    <div
                      className="progress-bar"
                      id="progress-tab"
                      role="progressbar"
                      aria-valuenow={activeTab * 25}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <ul className="nav time-line nav-tabs border-0 w-100 px-3 hstack justify-content-between position-absolute top-50 start-50 translate-middle">
                    {[1, 2, 3, 4, 5].map((tabValue) => (
                      <li className="nav-item m-0 register-step" key={tabValue} role="presentation">
                        <button
                          type="button"
                          className={`btn btn-sm ${tabValue === activeTab ? 'active' : 'inactive'}  rounded-pill`}
                          style={{ width: '3rem', height: '3rem' }}
                          data-skk-value={tabValue}
                          onClick={(e) => handleTabChange(e, tabValue)}
                        >
                          {tabValue}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <ul className="nav mt-5 pt-2 nav-tabs border-0 w-100 hstack justify-content-between position-absolute top-50 start-50 translate-middle">
                    {[1, 2, 3, 4, 5].map((tabValue) => (
                      <li className="register-title" key={tabValue} role="presentation">
                        <button
                          type="button"
                          className='btn btn-sm  rounded-pill'
                          data-skk-value={tabValue}
                          onClick={(e) => handleTabChange(e, tabValue)}
                        >
                          {tabValue == 1 ? <p className={`${activeTab === 1 ? 'active' : 'inactive'}`}>Personal Info</p> : <p></p>}
                          {tabValue == 2 ? <p className={`${activeTab === 2 ? 'active' : 'inactive'}`}>Education</p> : <p></p>}
                          {tabValue == 3 ? <p className={`${activeTab === 3 ? 'active' : 'inactive'}`}>Occupation & Salary</p> : <p></p>}
                          {tabValue == 4 ? <p className={`${activeTab === 4 ? 'active' : 'inactive'}`}>Upload Profile</p> : <p></p>}
                          {tabValue == 5 ? <p className={`${activeTab === 5 ? 'active' : 'inactive'}`}>Success</p> : <p></p>}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab-content container-90 p-4">
              {[1, 2, 3, 4, 5].map((tabValue) => (
                <div
                  key={tabValue}
                  className={`tab-pane animate__animated animate__flipInX ${tabValue === activeTab ? 'active' : ''}`}
                  id={`tab${tabValue}`}
                >
                  {tabValue == 1 ?
                    <div className='register-form'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100' />
                        </div>
                        <div className='col-lg-6'>
                          <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Name</label>
                              <input type="text" class="form-control" placeholder='your text here' />
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Gender</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option value="1">Select</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    {/* <option value="3"></option> */}
                                  </select>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
                                  <input
                                    name="dob"
                                    placeholder="dd/mm/yyyy"
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={dob}
                                    required
                                  />
                                  {/* <input type="date" class="form-control" placeholder='dd/mm/yyyy' /> */}
                                  {/* <input name="dob" placeholder="Date of Birth" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required /> */}
                                </div>
                              </div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                              <input type="text" class="form-control" placeholder='+91 your phone number' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Father Name</label>
                              <input type="text" class="form-control" placeholder='your Mother Namer' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Mother Name</label>
                              <input type="text" class="form-control" placeholder='your Mother Namer' />
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">City</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option value="1">Select</option>
                                    <option value="1">Ngl</option>
                                    <option value="2">Kovai</option>
                                  </select>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">District</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option value="1">Select</option>
                                    <option value="1">Ngl</option>
                                    <option value="2">Kovai</option>
                                    {/* <option value="3"></option> */}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className='w-100 mx-auto  p-3 mb-5 rounded-3 text-end'>
                            {activeTab == 5 ? <></> :
                              <>
                                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                                {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                  }
                  {tabValue == 2 ?
                    <div className='register-form'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100' />
                        </div>
                        <div className='col-lg-6'>
                          <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Qualification</label>
                              <select class="form-select" aria-label="Default select example">
                                <option value="1">Select</option>
                                <option value="1">MBBS</option>
                                <option value="2">B.E</option>
                                {/* <option value="3"></option> */}
                              </select>
                            </div>
                          </form>
                          <div className='w-100 mx-auto  p-3 mb-5 rounded-3 text-end'>
                            {activeTab == 5 ? <></> :
                              <>
                                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                                {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                  }
                  {tabValue == 3 ?
                    <div className='register-form'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100' />
                        </div>
                        <div className='col-lg-6'>
                          <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Work</label>
                              <input type="text" class="form-control" placeholder='your Work' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">WorkPlace</label>
                              <input type="text" class="form-control" placeholder='your WorkPlace' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Salary</label>
                              <input type="text" class="form-control" placeholder='your Salary' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Father Work</label>
                              <input type="text" class="form-control" placeholder='your Father Work' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Mother Work</label>
                              <input type="text" class="form-control" placeholder='your Mother Work' />
                            </div>
                          </form>
                          <div className='w-100 mx-auto  p-3 mb-5 rounded-3 text-end'>
                            {activeTab == 5 ? <></> :
                              <>
                                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                                {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                  }
                  {tabValue == 4 ?
                    <div className='register-form'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100' />
                        </div>
                        <div className='col-lg-6'>
                          <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Profile</label>
                              <input type="file" class="form-control" placeholder='your Work' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Horoscope FrontView</label>
                              <input type="file" class="form-control" placeholder='your Work' />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Horoscope BackView</label>
                              <input type="file" class="form-control" placeholder='your Work' />
                            </div>
                          </form>
                          <div className='w-100 mx-auto  p-3 mb-5 rounded-3 text-end'>
                            {activeTab == 5 ? <></> :
                              <>
                                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                                {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                  }
                  {tabValue == 5 ?
                    <div className='register-form text-center py-5'>
                      {/* <div className='success'>
                        <FontAwesomeIcon icon={faCheck} />
                      </div> */}
                      <img src={success} />
                      <h1>Register Successfully</h1>
                    </div>
                    :
                    <></>
                  }
                </div>
              ))}
            </div>
            {/* <div className='w-50 mx-auto p-3 mb-5 rounded-3 text-center'>
              {activeTab == 5 ? <></> :
                <>
                  {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                  {activeTab == 4 ? <><button className='preview-btn' onClick={register}>Register</button></> : <><button type='button' className='next-btn' onClick={next}>next</button></>}
                </>
              }
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
};

export default RegistrationForm;
