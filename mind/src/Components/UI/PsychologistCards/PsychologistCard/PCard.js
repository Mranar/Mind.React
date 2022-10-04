import React from 'react';
import './PCard.css'
const PCard = ({cardSrc , pfULLName  , pJob}) => {
    return (


            <div className="card-wrapper ">
                <a href={'./psychologistsDetails'}>
                    <div className="card ">

                        <div className="card-image">
                            <img style={{width: '100%' ,height:'100%' , objectFit:'cover'}} src={`${cardSrc}`} alt="profile one"/>
                        </div>

                        <ul className="social-icons">
                            <li>
                                <a href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fab fa-brands fa-square-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-vk fab"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="details">
                            <h2>{pfULLName}
                                <span className={'job-title'}>{pJob}</span>
                            </h2>
                        </div>
                    </div>

                </a>
            </div>

    );
};

export default PCard;