import React from "react";
import PhotoCard from './PhotoCard.js';
import LazyLoad from 'react-lazyload';


class PhotoGalleryList extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.polaroids.length !== this.props.polaroids.length
	}


	render() {
		return (
			<div className="gallery_container">
					{ this.props.polaroids ?
                    this.props.polaroids.map(polaroid => (
												<LazyLoad key={polaroid.id}>
													<PhotoCard 
                                                    key={polaroid.id} 
													polaroid={polaroid} 
													user={this.props.user}
													handleDeletePolaroid={this.props.handleDeletePolaroid}
                                                />
												</LazyLoad>
					))
                    : null
                	}
			</div>
		);
	}

};

export default PhotoGalleryList;