import React from 'react';
import './App.css';
import EnterApp from './EnterApp';
import Navbar from './Navbar';
// import Login from './Login';
// import Signup from './Signup';
import API from './adapters/API';
import PhotoGalleryContainer from './PhotoGalleryContainer';
// import { Route, withRouter } from "react-router-dom";

class App extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
    .then(user => {
      this.setState({user})
    })
  }

 // /USER METHODS ///

 signUp = user => {
  API.signUp(user)
  .then(user => this.setState({user}))
}

logIn = user => {
  API.logIn(user)
  .then(user => this.setState({user}))
}

logOut = () => {
  API.clearToken()
  this.setState({ user: undefined })
}

// updateUser = (event, user) => {
//   event.preventDefault()
//   API.updateUser(user)
//   .then(user => this.setState({user}))
//   .then(this.props.history.push("/account"))
// }

// deleteUser = id => {
//   API.deleteUser(id)
//   .then(this.logOut())
// }

// handleLoginSignupClicked = () => {
//   this.setState({loginSignupClicked: true})
// }

// handleSignupClicked = () => {
//   this.setState({
//     signupClicked: true,
//     loginSignupClicked: false
//   })
// }

// componentWillUnmount() {
//   this.setState({ 
//     loginSignupClicked: false,
//     signupClicked: false
//   })
// }

render() {
  return (
    <div className="app_container">
      <EnterApp />
      <div className="navbar_container">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
      </div>
        {
          this.state.user && !this.state.user.error && 
          <PhotoGalleryContainer user={this.state.user} />
        }
      {/* <Route exact path="/login" component={(props) => <Login {...props} handleLogin={this.logIn} />}/>
      <Route exact path="/signup" component={(props) => <Signup {...props} handleSignup={this.signUp} />}/>  */}
    </div>
  );
}

}

// export default withRouter(App);
export default App;
