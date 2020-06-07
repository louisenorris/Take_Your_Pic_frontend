import React from 'react';
// import { Link } from "react-router-dom";
import './App.css';


const EnterApp = (props) => {

        return (
          <div className="app">
            <div className="photo-frame" onClick={() => props.handleLoginSignupClicked()}>
              <div className="photo">
                <span className="photo-message">
                  Click to enter
                </span>
              </div>
            </div>
          </div>

        );

}

export default EnterApp;