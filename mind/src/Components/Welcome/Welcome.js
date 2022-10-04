import React from 'react';
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import './Welcome.css'
const Welcome = () => {
    return (
        <div className={'welcome container-fluid'}>
            <h1 className={'text-center mt-5'}>Welcome To Mind</h1>
            <div className={'welcome_card_box row col-lg-12 mt-5'}>
                <div className={'col-lg-6  d-flex flex-column align-items-center'}>
                    <WelcomeCard welcomeLink={'./Psychologists'} welcomeIcon={"fa-sharp fa-solid fa-stethoscope"} welcomeHead={'Qualified Psychologists'} welcomeBody={'All of our psychologists are qualified by our company'} />
                    <WelcomeCard welcomeLink={'./contact'} welcomeIcon={"fa-solid fa-phone"} welcomeHead={'24/7 Support'} welcomeBody={'You Can Contact us whenever you want'} />
                </div>
               <div className={'col-lg-6 d-flex flex-column align-items-center'}>
                   <WelcomeCard  welcomeLink={'./Psychologists'} welcomeIcon={"fa-solid fa-hospital"} welcomeHead={'Online Appointment'} welcomeBody={'you can easily arrange an online consultation with psychologists'} />
                   <WelcomeCard welcomeLink={'./contact'} welcomeIcon={"fa-solid fa-users"} welcomeHead={'Emergency Services'} welcomeBody={'Possibility to consult with private psychologists offline'} />
               </div>
            </div>

        </div>
    );
};

export default Welcome;