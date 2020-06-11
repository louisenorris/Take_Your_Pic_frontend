import React, { Component } from 'react';


class PhotoCard extends Component {


    render() {
        return (
            <div className="gallery__photo-frame">
                <img className="gallery__photo" src={this.props.polaroid.photo.url} alt="polaroid"></img>
            </div>
        );
    }
}

export default PhotoCard;