import React from 'react';
import './App.css';
// const supported = 'mediaDevices' in navigator;
// const videoPlayer = document.getElementById("player")
// const canvas = this.refs.canvas
// const context = canvas.getContext("2d")

// const photoFrame = document.querySelector('.photo-frame');
// const canvas = document.querySelector('.photo');
// const context = canvas.getContext('2d');
// const filterContainer = document.querySelector('.filter__div');
// const filterPhotoInstructions = document.querySelector('.filter_instructions');
// const filterBtns = document.querySelectorAll('.container__filters div');
// const filterBtnsArr = Array.from(filterBtns);
// const cameraBtnArrow = document.querySelector('.arrow__take_pic');


class Camera extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.video = React.createRef();
      }

    state = {
        // chosen_filter: "",
    }

    // handleChange = (event) => {
    //     this.setState({tour_name: event.target.value})
    // }

    // {for (let i = 0; i < filterBtnsArr.length; i++) {
    //     filterBtnsArr[i].addEventListener('click', function(event) {
    //         photo.classList.add(event.target.className)
    //       });
    //   };
    // }

    // showPhoto = () => {
    //     photoFrame.classList.add('show');
    //     photo.classList.add('fade-in');
    //     filterPhotoInstructions.innerText = 'Watch your polaroid develop, then re-take or save.';
    //     cameraBtnArrow.classList.add('hide');
    // }
      
    componentDidMount() {
        // Attach the video stream to the video element and autoPlay.
        navigator.mediaDevices.getUserMedia({video: true })
        .then(stream => this.video.current.srcObject = stream)
        .catch(console.log);
    }
    
    handleShowPhoto = () => {
        // debugger
        const context = this.canvas.current.getContext('2d');
        console.log(context)
        // debugger
        context.drawImage(this.video.current, 0, 0, 1440, 780);
    // debugger
        // Stop all video streams.
        this.video.current.srcObject.getVideoTracks().forEach(track => track.stop());
        // showPhoto()
    }
    
    
    render() {
        return (
            <>
            {/* <div className="filter__div">
                <p className="filter_instructions">Fancy adding a filter? Just click to select then take your photo.</p>
                <div className="container__filters">
                    <div className="filter__sepia">
                        <span>SEPIA</span>
                    </div>
                    <div className="filter__gray_scale">
                        <span>CHROME</span>
                    </div>
                    <div className="filter__hue_rotate">
                        <span>ALIEN</span>
                    </div>
                    <div className="filter__chilling">
                        <span>INVERSE</span>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="camera">
                    <div className="camera__button_container">
                        <div className="camera__button" onClick={() => this.handleShowPhoto()}></div>
                        <div className="arrow__take_pic"></div>
                    </div>
                    <div className="camera__lens">
                        <div className="lens__ring_1">
                            <div className="lens__ring_2">
                                <div className="lens__ring_3">
                                    <div className="lens__ring_4">
                                        <div className="lens__ring_5">
                                            <div className="lens__ring_6">
                                                <div className="lens__ring_7"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="camera__view-finder"></div>
                </div>

                <div className="photo-frame">
                    <canvas className="photo" ref={this.canvas} height="768" width="1024"></canvas>
                </div>

                <div className="camera__bottom"></div>
            </div>
            <video className="player" ref={this.video} autoPlay></video>
            </> 
        )
    }
}

export default Camera;