import React from 'react';
import './Psychologists.css'
import Barrier from "../../Components/UI/Barrier/Barrier";
import PCards from "../../Components/UI/PsychologistCards/PCards";

const Psychologists = () => {
    return (
        <div className={'psychologists_section'}>
            <Barrier/>
            <PCards/>
        </div>
    );
};

export default Psychologists;