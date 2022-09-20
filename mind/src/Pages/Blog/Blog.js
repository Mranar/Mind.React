import React from 'react';
import BCards from "../../Components/UI/BlogCards/BCards";
import Barrier from "../../Components/UI/Barrier/Barrier";

const Blog = () => {
    return (
        <div className={'blog '}>
            <Barrier/>
            <h1 className={'text-center pt-4 pb-5'}>Our Blogs</h1>
            <BCards/>

        </div>
    );
};

export default Blog;