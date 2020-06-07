import React from 'react';
import './App.css';
import EnterApp from './EnterApp';
import Login from './Login';
import Signup from './Signup';
import PhotoGalleryContainer from './PhotoGalleryContainer';
import API from './adapters/API.js';
import { Route, withRouter } from "react-router-dom";

class App extends React.Component {

  state = {
    user: null,
    loginSignupClicked: false,
    signupClicked: false
  }

  componentDidMount() {
    API.validateUser()
    .then(user => {
      debugger
      this.setState({user})
    })
  }

 // /USER METHODS ///

 signUp = user => {
  //  debugger
  API.signUp(user)
  .then(user => this.setState({user}))
  this.props.history.push("/")
  // debugger
}

logIn = user => {
  API.logIn(user)
  .then(user => this.setState({user}))
  this.props.history.push("/")
}

logOut = () => {
  API.clearToken()
  this.setState({
    user: null,
    loginSignupClicked: false,
    searchTerm: "",
    selectedTourID: null
  }, () => this.props.history.push("/"))

}

updateUser = (event, user) => {
  event.preventDefault()
  API.updateUser(user)
  .then(user => this.setState({user}))
  .then(this.props.history.push("/account"))
}

deleteUser = id => {
  API.deleteUser(id)
  .then(this.logOut())
}

handleLoginSignupClicked = () => {
  this.setState({loginSignupClicked: true})
}

handleSignupClicked = () => {
  this.setState({
    signupClicked: true,
    loginSignupClicked: false
  })
}

componentWillUnmount() {
  this.setState({ 
    loginSignupClicked: false,
    signupClicked: false
  })
}

renderContent = () => {
  if (this.state.user && !this.state.user.error) {
    return  <Route exact path='/' component={() => <PhotoGalleryContainer 
                                                user={this.state.user} 
                                                logOut={this.logOut}
                                              />
                                            } 
            />
  } else if (this.state.loginSignupClicked) {
    return (
      
      <div >
        <Login user={this.state.user} logIn={this.logIn} handleSignupClicked={this.handleSignupClicked}/>
    </div>
    )
  } else if (this.state.signupClicked) {
    return (
      
      <div >
        <Signup user={this.state.user} handleSignup={this.signUp}/>
      </div>
    )
  } else {
    return (
      <>
        <EnterApp handleLoginSignupClicked={this.handleLoginSignupClicked}/>
      </>
    )
  }
}

render() {
  return (
    <>
      <h1 className="title">Take Your Pic</h1>   
      {this.renderContent()}
      <Route exact path="/login" component={(props) => <Login {...props} handleSubmit={this.logIn} />}/>
      <Route exact path="/signup" component={(props) => <Signup {...props} handleSignup={this.signUp} />}/> 
    </>
  );
}
}

export default withRouter(App);
