import React from 'react';
import SimpleSlider from "../../Components/Slider/Slider";
import Welcome from "../../Components/Welcome/Welcome";
import PCard from "../../Components/UI/PsychologistCards/PsychologistCard/PCard";
import './home.css'
import BCard from "../../Components/UI/BlogCards/BlogCard/BCard";
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleSlider/>
                <Welcome/>
            <div className={'psychologistCards'}>
                <h1 className={'text-center my-5'}>Our Psychologists</h1>
                <div className={'row justify-content-center m-0'}>
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')} />
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-a19OVaa2rzA-unsplash.jpg')}/>
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')}/>
                   <div className={'text-center my-5'}> <Link to={'./psychologists'} className={'psycho_more_link '}> <input className={'psycho_more '} type={"button"} value={'More...'} /></Link></div>

                </div>
            </div>

            <div className={'b_cards  '}>
                <div className={'container '}>
                    <div className={'row justify-content-between'}>
                        <BCard authorName={'Anar Balacayev'} title={'5 Steps to Overcoming Frustration'} imageName={`c6c1579a-f511-4bf0-bed3-a141af1c5df5stock-vector-doctor-icon-on-blue-background-224509429.jpg`}/>
                        <BCard authorName={'Anar Balacayev'} title={'5 Steps to Overcoming Frustration'} imageName={`c6c1579a-f511-4bf0-bed3-a141af1c5df5stock-vector-doctor-icon-on-blue-background-224509429.jpg`}/>
                        <div className={'text-center my-5'}> <a href={'./Blog'} className={'psycho_more_link '}> <input className={'psycho_more '} type={"button"} value={'More...'} /></a></div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;