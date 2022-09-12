import React from 'react';
import SimpleSlider from "../../Components/Slider/Slider";
import Welcome from "../../Components/Welcome/Welcome";

const Home = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleSlider/>
                <Welcome/>

        </div>
    );
};

export default Home;