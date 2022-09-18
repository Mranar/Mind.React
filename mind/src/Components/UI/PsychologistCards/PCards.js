import React from 'react';

import './PCards.css'
import PCard from "./PsychologistCard/PCard";

const PCards = () => {
    return (

        <div className={'psychologistCards'}>
            <h1 className={'text-center my-5'}>Our Psychologists</h1>
                <div className={'row justify-content-center'}>
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')} />
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-a19OVaa2rzA-unsplash.jpg')}/>
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')}/>
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-a19OVaa2rzA-unsplash.jpg')}/>
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')}/>
            <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../Assets/Images/sigmund-a19OVaa2rzA-unsplash.jpg')}/>
                </div>
        </div>
    );
};

export default PCards;