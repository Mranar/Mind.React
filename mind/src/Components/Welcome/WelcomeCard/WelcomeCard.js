import React from 'react';

const WelcomeCard = (welcomeIcon , welcomeBody , welcomeHead) => {
    return (
        <div className={'col-lg-3'}>
            <div className={'WelcomeIcon'}>
                {welcomeIcon}
            </div>

            <div>
                <h5>{welcomeHead}</h5>
                <p>{welcomeBody}</p>
            </div>
        </div>
    );
};

export default WelcomeCard;