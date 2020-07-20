import React from 'react';
import './App.css';


const EnterApp = (props) => {

        return (
          <div className="app">
            {
              props.user && !props.user.error ?
                <div className="logo-photo-frame-user_active" >
                <div className="logo-photo-user_active">
                  <span className="photo-message-user_active">
                    take your pic
                  </span>
                </div>
              </div>
              :
              <div className="logo-photo-frame" >
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

            }
          </div>
        );

}

export default EnterApp;