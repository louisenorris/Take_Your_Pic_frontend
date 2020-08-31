import React, { Component } from 'react';


class PhotoCard extends Component {

    renderContent() {
        if (this.props.user.id === this.props.polaroid.user_id ) {
            return (
                <>
                <button className="photo__delete_btn" onClick={() => this.props.handleDeletePolaroid(this.props.polaroid.id)}>delete</button>
                <h4 className="photo__date_user_polaroid">{(this.props.polaroid.created_at).slice(0, 10)}</h4>
                </>    
            )
        } else {
            return (
                <h4 className="photo__date">{(this.props.polaroid.created_at).slice(0, 10)}</h4>
            )
        }
    }

    render() {
        return (
            <div className="gallery__photo-frame">
                <img className="gallery__photo" src={this.props.polaroid.photo.url} alt="polaroid"></img>
                {this.renderContent()}
            </div>
        );
    }
}

export default PhotoCard;