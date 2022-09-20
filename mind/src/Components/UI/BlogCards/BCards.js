import React from 'react';
import BCard from "./BlogCard/BCard";

const BCards = () => {
    return (
        <div className={'b_cards '}>
            <div className={'container'}>
                <div className={'row justify-content-between'}>
                    <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>
                    <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>
                    <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>
                    <BCard authorName={'Anar Balacayev'} blog_title={'5 Steps to Overcoming Frustration'}/>

                </div>
            </div>
        </div>
    );
};

export default BCards;