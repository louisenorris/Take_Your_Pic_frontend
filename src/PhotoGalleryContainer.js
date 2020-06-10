import React from "react";
import PhotoCard from './PhotoCard.js';


class PhotoGalleryContainer extends React.Component {


	render() {
		return (
			<div>
				<div>
					<h1>Polaroid gallery</h1>
					{ this.props.polaroids ?
                    this.props.polaroids.map(polaroid => <PhotoCard 
                                                    key={polaroid.id} 
                                                    polaroid={polaroid} 
                                                />)
                    : null
                }
				</div>
			</div>
		);
	}

};

export default PhotoGalleryContainer;