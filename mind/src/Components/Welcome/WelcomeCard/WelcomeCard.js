import React from 'react';
import './WelcomeCard.css'

const WelcomeCard = ({welcomeIcon , welcomeBody , welcomeHead,welcomeLink}
) => {
    return (
        <a href={welcomeLink}>
        <div className={'welcome_card  py-4  d-flex p-5 m-5 align-items-center  '}>

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
        </a>
    );
};

export default WelcomeCard;