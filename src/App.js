import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Camera from './Camera';
import API from './adapters/API';
import PhotoGalleryContainer from './PhotoGalleryContainer';
import { Route, withRouter, Switch } from "react-router-dom";

class App extends React.Component {

  state = {
    user: undefined,
    polaroids: []
  }

  componentDidMount() {
    API.validateUser()
    .then(user => {
      this.setState({user})
    })

    API.getPolaroids()
    .then(polaroids => {
      this.setState({polaroids})
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

handlePhotoSave = (photo) => {
  API.createPolaroid(photo, this.state.user.id)
  .then(data => console.log(data, data.photo))
    
    // this.setState({ 
    //     user: { ...this.state.user, polaroids: [...this.state.user.polaroids, data.photo] },
    //     polaroids: [...this.state.polaroids, data.photo] 
    //   }))
    .catch(errorPromise => {
      errorPromise
        .then(data => {
          this.setState({ errors: data.errors })
        })
    }).then(this.props.history.push("/"))
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


render() {
  return (
    <div className="app">
      <div className="navbar_container">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
      </div>
        {
          this.state.user && !this.state.user.error && 
            <Switch>
              <Route exact path="/" component={(props) => <PhotoGalleryContainer {...props} user={this.state.user} polaroids={this.state.polaroids}/>}/> 
              <Route exact path="/camera" component={(props) => <Camera {...props} user={this.state.user} handlePhotoSave={this.handlePhotoSave}/>}/> 
            </Switch>
        }
    </div>
  );
}

}

export default withRouter(App);