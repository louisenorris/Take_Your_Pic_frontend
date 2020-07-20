import React, { Component } from 'react';


class PhotoCard extends Component {


    render() {
        return (
            <div className="gallery__photo-frame">
                <img className="gallery__photo" src={this.props.polaroid.photo.url} alt="polaroid"></img>
                {
                    this.props.user.id === this.props.polaroid.user_id ? <button className="photo__delete_btn" onClick={() => this.props.handleDeletePolaroid(this.props.polaroid.id)}>delete</button> : null
                }
            </div>
        );
    }
}

export default PhotoCard;