import React from 'react';
import './Footer.css';
import backgroundImg from "../../Assets/Images/footer-bg.jpg";
const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`  }} className={"footer "}>
          <div className={'shadow'}>
              <div  className={"footer_top  container"}>
                 <div className={'row contact_infos justify-content-between '}>
                     <div  className={'contact_info col-lg-3 col-sm-12   py-5'}>
                         <ul>
                             <h4>Contact Info</h4>
                             <li><i className={'fa-solid fa-phone mt-3 me-2 py-2'}/> <a href={'tel: +994703766983'}>+994703766983</a></li>
                             <li><i className={'fa-solid fa-envelope me-2 py-2'}/> <a href={'mailto :anarab@code.edu.az'}>anarab@code.edu.az</a></li>
                             <li><i className={'fa-solid fa-location-pin me-2 py-2'}/> Azerbaijan Nizami Baku</li>
                             <li><i className={'social_medias fa-solid fa-heart me-3 py-2'}/>
                                 <a href={'https://www.facebook.com'}><i className={'fa-brands fa-facebook me-3 py-2'}></i>  </a>
                                 <a href={'https://www.twitter.com'}><i className={'fa-brands fa-twitter me-3 py-2'}></i>  </a>
                                 <a href={'https://www.linkedin.com'}><i className={'fa-brands fa-linkedin me-3 py-2'}></i>  </a>
                                 <a href={'https://www.telegram.com'}><i className={'fa-brands fa-telegram me-3 py-2'}></i>  </a>
                                 <a href={'https://www.youtube.com'}><i className={'fa-brands fa-youtube me-3 py-2'}></i>  </a>
                                 <a href={'https://www.pinterest.com'}><i className={'fa-brands fa-pinterest me-3 py-2'}></i>  </a>
                             </li>
                         </ul>
                     </div>
                     <div className={'working_time col-lg-8 col-sm-8 no-wrap text-white p-5 '}>
                            <h2 className={'text-center pb-5'}>Working Hours</h2>
                            <ul>
                                <li className={'d-flex justify-content-around'}><p>Monday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>tuesday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>wednesday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>thursday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>friday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>Saturday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                                <li className={'d-flex justify-content-around'}><p>Sunday</p>   <p>9.00 Am to 5.00 Pm </p></li>
                            </ul>
                     </div>
                 </div>
              </div>
          </div>
                <div>


            </div>
            <div className={"footer_bottom mt-2 py-5"}>
                <p className={'text-center text-white'}>2022 Mind. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;