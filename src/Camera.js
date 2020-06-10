import React from 'react';


class Camera extends React.Component {

    // state = {
    //     tour_name: ""
    // }

    // handleChange = (event) => {
    //     this.setState({tour_name: event.target.value})
    // }


    render() {
        return (
            <>
            <div className="filter__div">
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
            </div>

            <div className="container">
                <div className="camera">
                    <div className="camera__button_container">
                        <div className="camera__button"></div>
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
                    <canvas className="photo" width="320" height="240"></canvas>
                </div>

                <div className="camera__bottom"></div>
            </div>
            </> 
        )
    }
}

export default Camera;