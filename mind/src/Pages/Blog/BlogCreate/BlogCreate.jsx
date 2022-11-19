import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Barrier from "../../../Components/UI/Barrier/Barrier";
import { CreateBlog } from "../../../Store/Blog/BlogSlice";
import "./BlogCreate.css";

export const BlogCreate = () => {
  const [fileUpload, setFileUpload] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");

  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setBlogTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBlogBody(event.target.value);
  };

  const fileUploadHandler = (event) => {
    setFileUpload(event.target.files);
    const selectedFIles = [];
    const targetFiles = event.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(selectedFIles);
  };

  const blogCreateHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < fileUpload.length; i++) {
      formData.append("imageFiles", fileUpload[i]);
    }
    formData.append("title", blogTitle);
    formData.append("body", blogBody);

    CreateBlog(dispatch, formData);

    setBlogTitle("");
    setBlogBody("");
    setImages([]);
    setFileUpload("");
    navigate("/Blog");
  };

  return (
    <div className="blog_create pb-5">
      <Barrier />
      <div className={"container py-5 "}>
        <form onSubmit={blogCreateHandler} className={"blog_form py-5 "}>
          <div className={"blog_box row  "}>
            <div className={"col-lg-12 text-center pb-5"}>
              <h1 className={"text-center ms-4 "}>Blog Create</h1>
              <ul className={"blog_elements "}>
                <li>
                  <input
                    placeholder={"Blog Title"}
                    type="text"
                    id={"blogTitle"}
                    onChange={titleChangeHandler}
                  />
                </li>

                <li>
                  <textarea
                    minLength={50}
                    maxLength={500}
                    cols={40}
                    rows={5}
                    placeholder={"BlogBody"}
                    type="text"
                    id={"blogBody"}
                    onChange={bodyChangeHandler}
                  />
                </li>

                <li>
                  <input
                    className="photoinput"
                    multiple={true}
                    type={"file"}
                    id={"blogPhotos"}
                    onChange={fileUploadHandler}
                  />
                </li>

                <li className="pb-5">
                  <input
                    className={"submit_button fw-bold mb-5"}
                    type="submit"
                    value={"Submit"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreate;
