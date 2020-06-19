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
        photo: "",
        filterType: ""
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

    handleAddFilter = (event) => {
        debugger
        console.log(event.target.value)
        this.setState({ filterType: event.target.value })
    }

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
        !this.state.filterType ? context.filter = "none" : context.filter = this.state.filterType;
        debugger
        console.log(context)
        context.drawImage(this.video.current, 0, 0, 1440, 780);
        let image = this.canvas.current.toDataURL("image/png");
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
                        <label>
                            <input type="radio" value="" checked={this.state.filterType === ""} onChange={this.handleAddFilter}/>
                            NONE
                        </label>
                        <label>
                            <input type="radio" className="filter__sepia" value="sepia(60%)" checked={this.state.filterType === "sepia(60%)"} onChange={this.handleAddFilter}/>
                            SEPIA
                        </label>
                        <label>
                            <input type="radio" className="filter__gray_scale" value="grayscale(100%)" checked={this.state.filterType === "grayscale(100%)"} onChange={this.handleAddFilter}/>
                            CHROME
                        </label>
                        <label>
                            <input type="radio" className="filter__hue_rotate" value="hue-rotate(90deg)" checked={this.state.filterType === "hue-rotate(90deg)"} onChange={this.handleAddFilter}/>
                            ALIEN
                        </label>
                        <label>
                            <input type="radio" className="filter__chilling" value="invert(75%)" checked={this.state.filterType === "invert(75%)"} onChange={this.handleAddFilter}/>
                            INVERSE
                        </label>
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