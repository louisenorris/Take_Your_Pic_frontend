import React from "react";
import PhotoCard from './PhotoCard.js';


class PhotoGalleryList extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.polaroids.length > this.props.polaroids.length
	}


	render() {
		return (
			<div className="gallery_container">
					{ this.props.polaroids ?
                    this.props.polaroids.map(polaroid => <PhotoCard 
                                                    key={polaroid.id} 
                                                    polaroid={polaroid} 
                                                />)
                    : null
                	}
			</div>
		);
	}

};

export default PhotoGalleryList;