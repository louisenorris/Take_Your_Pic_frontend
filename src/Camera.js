import React from 'react';
import './App.css';

// const filterContainer = document.querySelector('.filter__div');
// const filterPhotoInstructions = document.querySelector('.filter_instructions');
// const filterBtns = document.querySelectorAll('.container__filters div');
// const filterBtnsArr = Array.from(filterBtns);


class Camera extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.video = React.createRef();
        this.cameraBtnArrow = React.createRef();
        this.photoFrame = React.createRef();
      }

    state = {
        photo: ""
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

    showPhoto = () => {
        this.photoFrame.current.classList.add('show');
        this.canvas.current.classList.add('fade-in');
        // filterPhotoInstructions.innerText = 'Watch your polaroid develop, then re-take or save.';
    }
      
    componentDidMount() {
        // Attach the video stream to the video element and autoPlay.
        navigator.mediaDevices.getUserMedia({video: true })
        .then(stream => this.video.current.srcObject = stream)
        .catch(console.log);
    }
    
    handleShowPhoto = () => {
        const context = this.canvas.current.getContext('2d');
        console.log(context)
        context.drawImage(this.video.current, 0, 0, 1440, 780);
        let image = this.canvas.current.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let imgSplit = image.split(",")[1]
        this.setState({
                    photo: imgSplit
                })
        // this.canvas.current.toBlob(function(blob) {
        //     let url = URL.createObjectURL(blob)
        //     this.setState({
        //         photo: url
        //     })
        // });
        //     blob => onCapture(blob), "image/jpeg", 1);
        // console.log(this.canvas.current.toBlob(blob => onCapture(blob), "image/jpeg", 1))
        this.showPhoto()
    }
    
    // componentWillUnmount = () => {
    //     // Stop all video streams.
    //     this.video.current.srcObject.getVideoTracks().forEach(track => track.stop());
    // }
    
    render() {
        return (
            <>
            <div className="camera-filter-options__container">
                <div className="filter__div">
                    <p className="filter_instructions">Filters</p>
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
                </div>
                <div className="camera__container">
                    <div className="camera">
                        <div className="camera__button_container">
                            <div className="camera__button" onClick={() => this.handleShowPhoto()}></div>
                            <div className="arrow__take_pic" ></div>
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

                    <div className="photo-frame" ref={this.photoFrame}>
                        <canvas className="photo" ref={this.canvas} height="768" width="1024"></canvas>
                    </div>

                    <div className="camera__bottom"></div>
                </div>
                    <div className="options_btn-container">
                        <button>Retake</button>
                        <button onClick={() => this.props.handlePhotoSave(this.state.photo)} >Save</button>
                    </div>
            </div>

            <video className="player" ref={this.video} autoPlay></video>
            </> 
        )
    }
}

export default Camera;