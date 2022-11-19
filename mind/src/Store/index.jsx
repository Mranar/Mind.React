import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./Auth/AuthSlice";
import UserInfoSlice from "./User/UserInfoSlice";
import ProfileSlice  from "./Profile/ProfileSlice";
import BlogSlice from "./Blog/BlogSlice";
import thunk from "redux-thunk";
import PsychologistSlice from "./Psychologist/PsychologistSlice";

const store = configureStore({
reducer:{
    AuthReducer: AuthSlice,
    UserInfoSlice: UserInfoSlice,
    ProfileSlice: ProfileSlice,
    BlogSlice: BlogSlice,
    PsychologistSlice:PsychologistSlice
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export default store;


