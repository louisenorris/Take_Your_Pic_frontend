import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Camera from './Camera';
import API from './adapters/API';
import PhotoGalleryContainer from './PhotoGalleryContainer';
// import { Route, withRouter, Switch } from "react-router-dom";

class App extends React.Component {

  state = {
    user: undefined,
    polaroids: [],
    showGallery: true,
    showCamera: false
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

// /POLAROID METHODS ///

// sortedPolaroids = () => {
//   if (this.state.polaroids) {
//     return this.state.polaroids.reverse()
//   }
// }

handlePhotoSave = (photo) => {
  API.createPolaroid(photo, this.state.user.id)
  .then(data => this.setState({ 
    polaroids: [...this.state.polaroids, data.polaroid],
    user: { ...this.state.user, polaroids: [...this.state.user.polaroids, data.polaroid] }
  }))
  // debugger
    // .catch(errorPromise => {
    //   errorPromise
    //     .then(data => {
    //       this.setState({ errors: data.errors })
    //     })
    // })
    // .then(this.props.history.push("/"))
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
            <>
              <Camera user={this.state.user} handlePhotoSave={this.handlePhotoSave}/>
              <PhotoGalleryContainer user={this.state.user} polaroids={this.state.polaroids}/>
            </>
            // <Switch>
            //   <Route exact path="/" component={(props) => <PhotoGalleryContainer {...props} user={this.state.user} polaroids={this.state.polaroids}/>}/> 
            //   <Route exact path="/camera" component={(props) => <Camera {...props} user={this.state.user} handlePhotoSave={this.handlePhotoSave}/>}/> 
            // </Switch>
        }
    </div>
  );
}

}

export default App;
// export default withRouter(App);