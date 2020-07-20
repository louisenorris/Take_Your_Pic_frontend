import React from "react";
import PhotoGalleryList from './PhotoGalleryList.js';


class PhotoGalleryContainer extends React.Component {


	sortedPolaroids = (polaroids) => {
		return this.props.polaroids.sort((a, b) => b.id - a.id)
	}


	render() {
		return (
			<div className="gallery_div">
				<h1>Polaroid gallery</h1>
				<div className="gallery_List_div">
					<PhotoGalleryList polaroids={this.sortedPolaroids()} user={this.props.user} handleDeletePolaroid={this.props.handleDeletePolaroid}/>
				</div>
			</div>
		);
	}

};

export default PhotoGalleryContainer;