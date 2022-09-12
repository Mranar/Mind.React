import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'


export default class SimpleSlider extends Component {
    render()  {
        const settings = {
            dots: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        };

        return (
        <div className={"dr_slider "}>

            <Slider  {...settings} >
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"}  src={require('../../Assets/Images/slider.jpg')}/>
                </div>
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"} src={require('../../Assets/Images/slide3.jpg')}/>
                </div>
                <div className={"slider_image"}>
                    <img  alt={"SliderImage"} src={require('../../Assets/Images/slide2.jpg')}/>
                </div>

            </Slider>
        </div>
    );
    }
};

