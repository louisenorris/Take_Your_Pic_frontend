import React, { Component } from 'react';


class PhotoCard extends Component {


    render() {
        return (
            <div className="photo-frame">
                <img className="photo" src={this.props.polaroid.photo.url} alt="polaroid"></img>
            </div>
        );
    }
}

export default PhotoCard;