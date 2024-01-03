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
import Profileupload from './Profileupload';


const RegistrationForm = () => {
  const { registerDetails, cropImage } = useSelector((state) => state.matrimony_profile)
  const [activeTab, setActiveTab] = useState(1);
  const [nextProcess, setNextProcess] = useState([])
  const [dob, setDob] = useState('');
  const [isDateInput, setIsDateInput] = useState(false);

  const dispatch = useDispatch();

  const handleTabChange = (event, tabValue) => {
    if (tabValue == 1) {
      setActiveTab(tabValue);
      updateProgress(tabValue);
      if (!nextProcess.includes(tabValue)) {
        setNextProcess([...nextProcess, activeTab])
      }
    } else if (tabValue == 2) {
      if (registerDetails.name == "") {
        alert("please fill all fields")
      } else {
        setActiveTab(tabValue);
        updateProgress(tabValue);
        if (!nextProcess.includes(tabValue)) {
          setNextProcess([...nextProcess, activeTab])
        }
      }
    } else if (tabValue == 3) {
      if (registerDetails.qualification == "") {
        alert("please fill all fields")
      } else {
        setActiveTab(tabValue);
        updateProgress(tabValue);
        if (!nextProcess.includes(tabValue)) {
          setNextProcess([...nextProcess, activeTab])
        }
      }
    } else if (tabValue == 4) {
      if (registerDetails.work == "" || registerDetails.salary == '') {
        alert("please fill all fields")
      } else {
        setActiveTab(tabValue);
        updateProgress(tabValue);
        if (!nextProcess.includes(tabValue)) {
          setNextProcess([...nextProcess, activeTab])
        }
      }
    } else if (tabValue == 5) {
      alert("please click register button")
    }
  };
  console.log(nextProcess)
  const next = () => {
    if (activeTab == 1) {
      if (registerDetails.name == "") {
        alert("please fill all fields")
      } else {
        setActiveTab(activeTab + 1);
        updateProgress(activeTab + 1);
        if (!nextProcess.includes(activeTab)) {
        setNextProcess([...nextProcess, activeTab])
      }
      }
    } else if (activeTab == 2) {
      if (registerDetails.qualification == "") {
        alert("please fill all fields")
      } else {
        setActiveTab(activeTab + 1);
        updateProgress(activeTab + 1);
        if (!nextProcess.includes(activeTab)) {
        setNextProcess([...nextProcess, activeTab])
      }
      }
    } else if (activeTab == 3) {
      if (registerDetails.work == "" || registerDetails.salary == '') {
        alert("please fill all fields")
      } else {
        setActiveTab(activeTab + 1);
        updateProgress(activeTab + 1);
        if (!nextProcess.includes(activeTab)) {
        setNextProcess([...nextProcess, activeTab])
      }
      }
    } else if (activeTab == 4) {
      if (registerDetails.profile_image == "") {
        alert("please fill all fields")
      } else {
        setActiveTab(activeTab + 1);
        updateProgress(activeTab + 1);
        if (!nextProcess.includes(activeTab)) {
        setNextProcess([...nextProcess, activeTab])
      }
      }
    }
    // setActiveTab(activeTab + 1);
    // updateProgress(activeTab + 1);
    // setNextProcess([...nextProcess, activeTab])
  }
  const preview = () => {
    setActiveTab(activeTab - 1);
    updateProgress(activeTab - 1);
  }
  const register = () => {
    setActiveTab(activeTab + 1);
    updateProgress(activeTab + 1);
    dispatch(setregisterDetails({ ...registerDetails, profile_image: cropImage }))
    if (!nextProcess.includes(4)) {
      setNextProcess([...nextProcess, activeTab])
    }
  }


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
  console.log(registerDetails)
  console.log(1, cropImage)
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
                      <li className='nav-item m-0 register-step rounded-pill' key={tabValue} role="presentation">
                        <button
                          type="button"
                          className={`btn btn-sm ${tabValue === activeTab ? 'active' : nextProcess.includes(tabValue) ? 'active' : 'inactive'} rounded-pill`}
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
                          className='btn btn-sm border-0 rounded-pill'
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
                    <div className='register-field'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100 rounded-3' />
                        </div>
                        <div className='col-lg-6 px-4'>
                          <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Name</label>
                              <input type="text" className="form-control" placeholder='your text here' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, name: e.target.value }))} />
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Gender</label>
                                  <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, gender: e.target.value }))}>
                                    <option value="1">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    {/* <option value="3"></option> */}
                                  </select>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Date of Birth</label>
                                  {/* <input
                                    name="dob"
                                    placeholder="dd/mm/yyyy"
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={dob}
                                    required
                                    onChange={(e)=>dispatch(setregisterDetails({...registerDetails,dob:e.target.value}))}
                                  /> */}
                                  <input type="date" className="form-control" placeholder='dd/mm/yyyy' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, dob: e.target.value }))} />
                                  {/* <input name="dob" placeholder="Date of Birth" className="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required /> */}
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                              <input type="text" className="form-control" placeholder='+91 your phone number' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, mobile_number: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Email</label>
                              <input type="mail" className="form-control" placeholder='your Email' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, email: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Father Name</label>
                              <input type="text" className="form-control" placeholder='your Mother Namer' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, fathername: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Mother Name</label>
                              <input type="text" className="form-control" placeholder='your Mother Namer' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, mothername: e.target.value }))} />
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">City</label>
                                  <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, city: e.target.value }))}>
                                    <option value="">Select</option>
                                    <option value="ngl">Ngl</option>
                                    <option value="kovai">Kovai</option>
                                  </select>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">District</label>
                                  <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, dist: e.target.value }))}>
                                    <option value="">Select</option>
                                    <option value="kk">Ngl</option>
                                    <option value="kovai">Kovai</option>
                                    {/* <option value="3"></option> */}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">caste</label>
                                  <input type='text' className='form-control' placeholder='caste' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, caste: e.target.value }))} />
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Religion</label>
                                  <input type='text' className='form-control' placeholder='yuor religion' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, religion: e.target.value }))} />
                                  {/* <input type="date" className="form-control" placeholder='dd/mm/yyyy' /> */}
                                  {/* <input name="dob" placeholder="Date of Birth" className="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required /> */}
                                </div>
                              </div>
                            </div>
                            <div className='row m-0'>
                              <div className='col-lg-6 p-0'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Password</label>
                                  <input type='password' className='form-control' placeholder='passowrd' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, passowrd: e.target.value }))} />
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Confirm passowrd</label>
                                  <input type='password' className='form-control' placeholder='yuor confirpassowrd' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, confirm_password: e.target.value }))} />
                                  {/* <input type="date" className="form-control" placeholder='dd/mm/yyyy' /> */}
                                  {/* <input name="dob" placeholder="Date of Birth" className="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required /> */}
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
                    <div className='register-field'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100 rounded-3' />
                        </div>
                        <div className='col-lg-6 px-3'>
                          <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Qualification</label>
                              <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, qualification: e.target.value }))}>
                                <option value="">Select</option>
                                <option value="MBBS">MBBS</option>
                                <option value="B.E">B.E</option>
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
                    <div className='register-field'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100 rounded-3' />
                        </div>
                        <div className='col-lg-6 px-3'>
                          <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Work</label>
                              <input type="text" className="form-control" placeholder='your Work' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, work: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">WorkPlace</label>
                              <input type="text" className="form-control" placeholder='your WorkPlace' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, workplace: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Salary</label>
                              <input type="text" className="form-control" placeholder='your Salary' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, salary: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Father Work</label>
                              <input type="text" className="form-control" placeholder='your Father Work' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, father_work: e.target.value }))} />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Mother Work</label>
                              <input type="text" className="form-control" placeholder='your Mother Work' onChange={(e) => dispatch(setregisterDetails({ ...registerDetails, mother_work: e.target.value }))} />
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
                    <div className='register-field'>
                      <div className='row m-0 p-3'>
                        <div className='col-lg-6 p-0'>
                          <img src={slider1} className='w-100 rounded-3' />
                        </div>
                        <div className='col-lg-6 px-3'>
                          {/* <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Profile</label>
                              <input type="file" className="form-control" placeholder='your Work' />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Horoscope FrontView</label>
                              <input type="file" className="form-control" placeholder='your Work' />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Horoscope BackView</label>
                              <input type="file" className="form-control" placeholder='your Work' />
                            </div>
                          </form> */}
                          <Profileupload />
                          <div className='w-100 mx-auto  p-3 mb-5 rounded-3 text-end'>
                            {activeTab == 5 ? <></> :
                              <>
                                {activeTab > 1 ? <><button type='button' className='preview-btn' onClick={preview}>preview</button></> : <></>}
                                {activeTab == 4 && cropImage.length == 2 ? <><button className='preview-btn' onClick={register}>Register</button></> : <></>}
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
                    <div className='register-form register-success text-center py-5'>
                      {/* <div className='success'>
                        <FontAwesomeIcon icon={faCheck} />
                      </div> */}
                      {/* <img src={success} /> */}
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                        <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                      </svg>
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
