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
    showCamera: false,
    userFilter: false
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

handleDeletePolaroid = (id) => {
  const withoutDeletedPolaroid = this.state.polaroids.filter(polaroid => polaroid.id !== id)
  const userWithoutDeletedPolaroid = this.state.user.polaroids.filter(polaroid => polaroid.id !== id)
  this.setState({ 
    polaroids: withoutDeletedPolaroid,
    user: { ...this.state.user, polaroids: userWithoutDeletedPolaroid }
  })
}

deletePolaroid = id => {
  API.deletePolaroid(id)
  this.handleDeletePolaroid(id)

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

handleUserFilter = () => {
  if (this.state.userFilter) {
    this.setState({userFilter: false})
  } else {
    this.setState({userFilter: true})
  }
}

filteredPolaroids = () => {
  if (this.state.userFilter) {
    return this.state.polaroids.filter(polaroid => polaroid.user_id === this.state.user.id)
  } else {
    return this.state.polaroids
  }
}

showCameraComponent = () => {
  this.state.showCamera ? this.setState({showCamera: false}) : this.setState({showCamera: true})
}

renderAppContent() {
  if (this.state.user && !this.state.user.error && this.state.showCamera) {
    return (
    <>
      <Camera user={this.state.user} handlePhotoSave={this.handlePhotoSave}/>
      <PhotoGalleryContainer  user={this.state.user} 
                              polaroids={this.filteredPolaroids()} 
                              handleDeletePolaroid={this.deletePolaroid} 
                              handleUserFilter={this.handleUserFilter}
                              userFilter={this.state.userFilter}/>
    </>
    )
  } else if (this.state.user && !this.state.user.error && !this.state.showCamera) {
    return (
      <PhotoGalleryContainer  user={this.state.user} 
                              polaroids={this.filteredPolaroids()} 
                              handleDeletePolaroid={this.deletePolaroid} 
                              handleUserFilter={this.handleUserFilter}
                              userFilter={this.state.userFilter}/>
    )
  } else {
    
  }
}

render() {
  return (
    <div className="app">
      <div className="navbar_container">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} handleShowCamera={this.showCameraComponent} showCamera={this.state.showCamera}/>
      </div>
      { this.renderAppContent() }
    </div>
  );
}

}

export default App;