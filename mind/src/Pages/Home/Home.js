import React from 'react';
import SimpleSlider from "../../Components/Slider/Slider";
import Welcome from "../../Components/Welcome/Welcome";
import PCard from "../../Components/UI/PsychologistCards/PsychologistCard/PCard";
import './home.css'
import BCard from "../../Components/UI/BlogCards/BlogCard/BCard";
const Home = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleSlider/>
                <Welcome/>
            <div className={'psychologistCards'}>
                <h1 className={'text-center my-5'}>Our Psychologists</h1>
                <div className={'row justify-content-center'}>
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')} />
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-a19OVaa2rzA-unsplash.jpg')}/>
                    <PCard pJob={'Psychologist'}  pfULLName={'Anar '}  cardSrc={require('../../../src/Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')}/>
                   <div className={'text-center my-5'}> <a href={'./psychologists'} className={'psycho_more_link '}> <input className={'psycho_more '} type={"button"} value={'More...'} /></a></div>

                </div>
            </div>

            <div className={'b_cards  '}>
                <div className={'container '}>
                    <div className={'row justify-content-between'}>
                        <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>
                        <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>
                        <div className={'text-center my-5'}> <a href={'./Blog'} className={'psycho_more_link '}> <input className={'psycho_more '} type={"button"} value={'More...'} /></a></div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;