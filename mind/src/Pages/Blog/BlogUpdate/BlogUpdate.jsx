import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Barrier from '../../../Components/UI/Barrier/Barrier';
import './BlogUpdate.css'

export const BlogUpdate = () => {
 
    const title = useRef(null);
    const body = useRef(null);
    const image = useRef(null);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  
    
  
  
  
    return (
      <div className='blog_create pb-5'>
        <Barrier/>
          <div className={'container py-5 '}>
  
  <form  className={'blog_form py-5 '}>
      <div className={'blog_box row  '}>
          <div className={'col-lg-12 text-center pb-5'}>
              <h1 className={'text-center ms-4 '}>Blog Create</h1>
              <ul className={'blog_elements '}>
                  <li>
                      <input ref={title} placeholder={'Blog Title'} type='text' id={'blogTitle'} />
                  </li>
  
                  <li>
                      <textarea  ref={body} minLength={50} maxLength={500}  cols={40} rows={5}  placeholder={'BlogBody'}  type='text' id={'blogBody'} />
                  </li>
  
                  <li>
                      <input  ref={image} className='photoinput' multiple={true}  type={'file'} id={'blogPhotos'} />
                  </li>
  
                  <li className='pb-5'>
                      <input className={'submit_button fw-bold mb-5'} type="submit" value={'Submit'}/>
                  </li>
              </ul>
          </div>
      </div>
  </form>
  
  </div>
      </div>
  )
}

export default BlogUpdate;
