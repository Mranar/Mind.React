import React, { useEffect } from 'react';
import Barrier from "../../../Components/UI/Barrier/Barrier";
import '../BlogDetails/BlogDetails.css'
import { GetBlog } from "../../../Store/Blog/BlogSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const blogData = useSelector((state) => state.BlogSlice);
  
  console.log(blogData.blog);
  useEffect(() => {
    GetBlog(
      dispatch,
      navigate,
      id
    );
  }, [dispatch, navigate , id]);



    return (

        <div className={'container'}>
            <Barrier/>
            <div className="header text-center my-5">
                <h1>Blog Title</h1>
            </div>
            <div ><img className={'blog_image'} alt={'BlogImage'} src={ `http://localhost:5295/img/${blogData.blog.imageName}`} /></div>
            <div className={'d-flex row text-center'}>
                <div className={'col-lg-6 fw-bold  mt-4'}><p>{blogData.blog.authorName}</p></div>
                <div className={'col-lg-6 fw-bold  mt-4'}><p>{"2022.19.11"}</p></div>
            </div>
                <div className={'text-center my-5'}><h1>{blogData.blog.title}</h1></div>

             <div className={'blog_area'}><p className='blog-body'>{blogData.blog.body}</p></div>
            </div>
    );
};

export default BlogDetails;