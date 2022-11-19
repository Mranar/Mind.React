import React from 'react';
import { Link } from 'react-router-dom';
import './BCard.css'
const BCard = ({title ,blogid, authorName , imageName}) => {
    return (
        <div className={'b_card col-lg-5 col-sm-8 my-5'}>
          <Link to={`./blogDetails/${blogid}`}>
              <div className={'b_card_top col-lg-12'}>
                  <img style={{width: '100%' ,height:'100%' , objectFit:'cover'}} className={'b_card_image'} alt={'blog'} src={ `http://localhost:5295/img/${imageName}`}/>
              </div>

              <div className={'b_card_body my-5 text-center'}>
                  <h3  className={'blog_creator my-2'}>{authorName}</h3>
                  <h1  className={'blog_creator my-2'}>{title}</h1>
                  
              </div>

              <div className={'b_card_bottom py-5 text-center'}>
                  <a href={'www.google.com'}><input className={'blog_button'} value={'Read More'} type={"button"}/></a>
              </div>
          </Link>
        </div>
    );
};

export default BCard;