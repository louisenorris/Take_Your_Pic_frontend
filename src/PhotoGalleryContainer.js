import React from "react";
import PhotoGalleryList from './PhotoGalleryList.js';


class PhotoGalleryContainer extends React.Component {


	sortedPolaroids = (polaroids) => {
		return this.props.polaroids.sort((a, b) => b.id - a.id)
	}

	renderContent() {
		if (this.props.userFilter) {
			return (
				<>
					<h1>polaroid gallery</h1>
					<button className="gallery_div_btn" onClick={() => this.props.handleUserFilter()}>show all</button>
					<div className="gallery_List_div">
						<PhotoGalleryList polaroids={this.sortedPolaroids()} user={this.props.user} handleDeletePolaroid={this.props.handleDeletePolaroid}/>
					</div>
				</>
			)
		} else {
			return (
				<>
					<h1>polaroid gallery</h1>
					<button className="gallery_div_btn" onClick={() => this.props.handleUserFilter()}>filter by user</button>
					<div className="gallery_List_div">
						<PhotoGalleryList polaroids={this.sortedPolaroids()} user={this.props.user} handleDeletePolaroid={this.props.handleDeletePolaroid}/>
					</div>
				</>
			)
		}
	}


	render() {
		return (
			<div className="gallery_div">
				{this.renderContent()}
			</div>
		);
	}

};

export default PhotoGalleryContainer;