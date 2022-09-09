import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'


export default class SimpleSlider extends Component {
    render()  {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,





        };

        return (
        <div className={"dr_slider "}>

            <Slider  {...settings} >
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"}  src={'https://picsum.photos/id/1065/1600/500'}/>
                </div>
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"} src={'https://picsum.photos/id/1066/1600/500'}/>
                </div>
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"} src={'https://picsum.photos/id/1067/1600/900'}/>
                </div>

            </Slider>
        </div>
    );
    }
};

