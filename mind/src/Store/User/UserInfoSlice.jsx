import {createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../Fetch/FetchConfiguration";

export const UserDataSlice = createSlice({
    name: "userData",
    initialState: {
        userData: {},
        error: null,

    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },

    },

    });

export async function GetUserData(dispatch) {
    const response = await fetch(
        `${baseUrl}/user/${
            JSON.parse(localStorage.getItem("user") || "{}").user.id
        }`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                    JSON.parse(localStorage.getItem("user") || "{}").token
                }`,
            },
        }
    ).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {
                dispatch(setError(data.error.message.toString()));
            });
        }
    });

    dispatch(setUserData(response));
}







export const { setUserData,  setError } = UserDataSlice.actions;
export default UserDataSlice.reducer;