import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PsychologistGetAll } from '../../../Store/Psychologist/PsychologistSlice';

import './PCards.css'
import PCard from "./PsychologistCard/PCard";

const PCards = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();

  const psychologistData = useSelector((state) => state.PsychologistSlice);
  console.log(psychologistData.Psychologists);
  useEffect(() => {
    PsychologistGetAll(
      dispatch,
      navigate,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  }, [dispatch, navigate]);




    return (

        <div className={'psychologistCards'}>
            <h1 className={'text-center my-5'}>Our Psychologists</h1>
                <div className={'row justify-content-center m-0'}>
            {psychologistData.Psychologists !== []
            ? psychologistData.Psychologists.map((b) => (
              <PCard
               key={b.id}
               PId={b.id}
               pJob={'Psychologist'}
               pfULLName={b.firstname  + b.lastname} 
               cardSrc={require('../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')} />
              ))
            : ""}
                </div>
        </div>
    );
};

export default PCards;