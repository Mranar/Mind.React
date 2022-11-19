import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const BlogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog: {},
    loading: false,
    error: null,
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function BlogGetAll(dispatch, navigate) {
  const response = await fetch(`${baseUrl}/Blog/blogGetAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        // dispatch(setError(data.error.message.toString()));
        navigate("/PageNotFound");
      });
    }
  });

  dispatch(setBlogs(response));
}

export async function GetBlog(dispatch, navigate, id) {
  const response = await fetch(`${baseUrl}/Blog/blogGet/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        // dispatch(setError(data.error.message.toString()));
        navigate("/PageNotFound");
      });
    }
  });

  dispatch(setBlog(response));
}

export async function CreateBlog(dispatch, formData) {
  console.log(JSON.parse(localStorage.getItem("user") || "{}").token);
  console.log(formData.get("body"));
  await fetch(`${baseUrl}/Blog/blogCreate`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
      Accept: "*/*",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        setError(data.error.message.toString());
      });
    }
  });

  BlogGetAll(dispatch);
}

export async function UpdateBlog(dispatch, formData) {
  await fetch(`${baseUrl}/Blog/blogCreate`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
      Accept: "*/*",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        setError(data.error.message.toString());
      });
    }
  });

  BlogGetAll(dispatch);
}

export const { setBlog, setBlogs, setLoading, setError } = BlogSlice.actions;
export default BlogSlice.reducer;
