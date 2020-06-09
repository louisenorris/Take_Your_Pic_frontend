import React from 'react';
import './App.css';
// import EnterApp from './EnterApp';
import Navbar from './Navbar';
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
    <>
      <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
        {
          this.state.user && !this.state.user.error && 
          <PhotoGalleryContainer user={this.state.user} />
        }
    </>
  );
}

}

// export default withRouter(App);
export default App;
