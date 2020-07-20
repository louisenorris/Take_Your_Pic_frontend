import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Camera from './Camera';
import API from './adapters/API';
import PhotoGalleryContainer from './PhotoGalleryContainer';

class App extends React.Component {

  state = {
    user: undefined,
    polaroids: [],
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

deletePolaroid = id => {
  debugger
  API.deletePolaroid(id)
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

showCameraComponent = () => {
  if (this.state.showCamera) {
    this.setState({showCamera: false})
  } else {
    this.setState({showCamera: true})
  }
}

render() {
  return (
    <div className="app">
      <div className="navbar_container">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} handleShowCamera={this.showCameraComponent} showCamera={this.state.showCamera}/>
      </div>
        {
          this.state.user && !this.state.user.error && this.state.showCamera ?
            <>
              <Camera user={this.state.user} handlePhotoSave={this.handlePhotoSave}/>
              <PhotoGalleryContainer user={this.state.user} polaroids={this.state.polaroids} handleDeletePolaroid={this.deletePolaroid}/>
            </>
            : <PhotoGalleryContainer user={this.state.user} polaroids={this.state.polaroids} handleDeletePolaroid={this.deletePolaroid}/>
        }
    </div>
  );
}

}

export default App;