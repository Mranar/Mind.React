import React from 'react';
import './BCard.css'
const BCard = ({authorName , blog_title}) => {
    return (
        <div className={'b_card col-lg-5 my-5'}>
            <div className={'b_card_top col-lg-12'}>
             <img style={{width: '100%' ,height:'100%' , objectFit:'cover'}} className={'b_card_image'} alt={'blog'} src={require('../../../../Assets/Images/slider.jpg')} />
            </div>

            <div className={'b_card_body my-5 text-center'}>
                <h3  className={'blog_creator my-2'}>{authorName}</h3>
                <h1 className={'blog_title my-2'}>{blog_title}</h1>
            </div>

            <div className={'b_card_bottom py-5 text-center'}>
                <a href={'www.google.com'}><input className={'blog_button'} value={'Read More'} type={"button"}/></a>
            </div>
        </div>
    );
};

export default BCard;