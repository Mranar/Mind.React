import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const PsychologistSlice = createSlice({
  name: "Psychologists",
  initialState: {
    Psychologists: [],
    Psychologist: {},
    loading: false,
    error: null,
  },
  reducers: {
    setPsychologists: (state, action) => {
      state.Psychologists = action.payload;
    },
    setPsychologist: (state, action) => {
      state.Psychologist = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});


export async function PsychologistGetAll(dispatch, navigate) {
    const response = await fetch(`${baseUrl}/Psychologist/PsychologistGetAll`, {
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
  
    dispatch(setPsychologists(response));
  }
  
  export async function GetPsychologists(dispatch, navigate, id) {
    const response = await fetch(`${baseUrl}/Psychologist/GetPsychologist/${id}`, {
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
  
    dispatch(setPsychologist(response));
  }

  
export const { setPsychologist, setPsychologists, setLoading, setError } = PsychologistSlice.actions;
export default PsychologistSlice.reducer;