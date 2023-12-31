import React, { useState } from 'react';

import '../Common/assets/css/auth.css'

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 2

  const handleTabChange = (event, tabValue) => {
    setActiveTab(tabValue);
    updateProgress(tabValue);
  };
  const next = () =>{
    setActiveTab(activeTab + 1);
    updateProgress(activeTab + 1);
  }
  const preview = () =>{
    setActiveTab(activeTab - 1);
    updateProgress(activeTab - 1);
  }
  const updateProgress = (position) => {
    const length = 4; // Number of tabs
    if(position == 1){
        const progressWidth = (position / length) * 0;
        document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }else if(position == 2){
        const progressWidth = (position / length) * 50;
        document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }else if(position == 3){
        const progressWidth = (position / length) * 65;
        document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }else if(position == 4){
        const progressWidth = (position / length) * 75;
        document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }else{
        const progressWidth = (position / length) * 100;
        document.getElementById('progress-tab').style.width = `${progressWidth}%`;
    }

  };

  return (
    <div className="container py-4">
      <div className="py-4">
        <div className="position-relative mb-4" style={{ height: '2rem' }}>
          <div className="w-100 position-absolute top-50 start-50 translate-middle">
            <div className="progress" style={{ height: '.25rem' }}>
              <div
                className="progress-bar bg-primary"
                id="progress-tab"
                role="progressbar"
                aria-valuenow={activeTab * 25}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <ul className="nav nav-tabs border-0 w-100 hstack justify-content-between position-absolute top-50 start-50 translate-middle">
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
              <h4 className="">Tab {tabValue}</h4>
              {/* Your tab content here */}
            </div>
          ))}
        </div>
        {activeTab > 1 ? <><button type='button' onClick={preview}>preview</button></> : <></>}
        {activeTab > 4 ? <></> : <><button type='button' onClick={next}>next</button></>}
      </div>
    </div>
  );
};

export default RegistrationForm;
