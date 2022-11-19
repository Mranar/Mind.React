import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlogGetAll } from "../../../Store/Blog/BlogSlice";
import BCard from "./BlogCard/BCard";

const BCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogData = useSelector((state) => state.BlogSlice);
//   console.log(blogData.blogs[0].id);
  useEffect(() => {
    BlogGetAll(
      dispatch,
      navigate,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  }, [dispatch, navigate]);

  return (
    <div className={"b_cards "}>
      <div className={"container"}>
        <div className={"row justify-content-evenly"}>
          {blogData.blogs !== []
            ? blogData.blogs.map((b) => (
                <BCard
                  key={b.id}
                  blogid={b.id}
                  authorName={b.authorName}
                  title={b.title}
                  imageName={b.imageName[0]}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default BCards;
