import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeCard.css'

const WelcomeCard = ({welcomeIcon , welcomeBody , welcomeHead,welcomeLink}
) => {
    return (
        <Link to={welcomeLink}>
        <div className={'welcome_card  py-4  d-flex p-5 m-md-5 align-items-center mb-5 mb-md-0 '}>

             <div className={' me-5 mt-5'}>
                 <i  className={' welcome_card_addition '+ welcomeIcon}></i>
             </div>

             <div className={'col-lg-10'}>
                 <h5 className={'fw-bold mb-4'}>{welcomeHead}</h5>
                 <div className={'col-lg-12'}>
                     <span >{welcomeBody}</span>
                 </div>
             </div>

        </div>
        </Link>
    );
};

export default WelcomeCard;