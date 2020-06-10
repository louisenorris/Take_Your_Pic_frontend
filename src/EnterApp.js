import React from 'react';
import './App.css';


const EnterApp = (props) => {

        return (
          <div className="app">
            <div className="logo-photo-frame" onClick={() => props.handleLoginSignupClicked()}>
              <div className="logo-photo">
                <span className="photo-message">
                  Take
                </span>
                <span className="photo-message">
                  Your
                </span>
                <span className="photo-message">
                  Pic
                </span>
              </div>
            </div>
          </div>

        );

}

export default EnterApp;