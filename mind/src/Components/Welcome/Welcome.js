import React from 'react';
import WelcomeCard from "./WelcomeCard/WelcomeCard";

const Welcome = () => {
    return (
        <div className={'welcome'}>
            <div className={'col-lg-12'}>
                <WelcomeCard welcomeIcon={} welcomeHead={} welcomeBody={} />
                <WelcomeCard welcomeIcon={} welcomeHead={} welcomeBody={} />
                <WelcomeCard welcomeIcon={} welcomeHead={} welcomeBody={} />
                <WelcomeCard welcomeIcon={} welcomeHead={} welcomeBody={} />

            </div>

        </div>
    );
};

export default Welcome;