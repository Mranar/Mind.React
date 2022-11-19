import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";
// import { GetUserData } from "../User/UserInfoSlice";




export const ProfileSlice = createSlice({
    name: "profile",
    initialState: {
      profile: {},
      PsychologistProfile:{},
      loading: false,
      error: null,
    },
    reducers: {
      setProfile: (state, action) => {
        state.profile = action.payload;
      },

      setPsychologistProfile: (state, action) => {
        state.PsychologistProfile = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },


    
    },


    

  });
  
  export async function GetProfile(
    dispatch,
    navigate,
    id,
  ) {
    const response = await fetch(`${baseUrl}/User/${id}`, {
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
  
    dispatch(setProfile(response));
  }


  export async function GetPsychoProfile(
    dispatch,
    navigate,
    id,
  ) {
    const response = await fetch(`${baseUrl}/Psychologist/${id}`, {
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
  
    dispatch(setPsychologistProfile(response));
    
  }



 


export const { setProfile, setPsychologistProfile, setLoading, setError } = ProfileSlice.actions;
export default ProfileSlice.reducer;