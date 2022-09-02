import React from 'react';
import './Slider.css'
const Slider = () => {
    return (
        <div className={'slider__doctor'} >
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner "   style={{height:'70vh'}}>
                    <div className="carousel-item active">
                        <img src={require("../../Assets/Images/ezgif-3-e8d5248497.jpg")} alt="Los Angeles" className="d-block" style={{width:"100%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../Assets/Images/ezgif-3-be159e0905.png")} alt="Chicago" className="d-block" style={{width:"100%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../Assets/Images/ezgif-3-e8d5248497.jpg")} alt="New York" className="d-block" style={{width:"100%"}}/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </div>
    );
};

export default Slider;