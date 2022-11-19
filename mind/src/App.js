import React from 'react';
import './Style/index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Psychologists from "./Pages/Psychologists/Psychologists";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import PsychologistsDetails from "./Pages/Psychologists/PsychologistDetails/PsychologistsDetails";
import Profile from "./Pages/Profile/Profile";
import MainLayout from "./Layouts/MainLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import BlogDetails from "./Pages/Blog/BlogDetails/BlogDetails";
import PageNotFound from "./Pages/NotFound/PageNotFound";
import PsychologistRegister from './Pages/Register/PsychologistRegister/PsychologistRegister';
import BlogCreate from './Pages/Blog/BlogCreate/BlogCreate';
import BlogUpdate from './Pages/Blog/BlogUpdate/BlogUpdate';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'register/psychologistRegister'} element={<PsychologistRegister/>}/>
                    <Route path={'psychologists'} element={<Psychologists/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'blog'} element={<Blog/>}/>
                    <Route path={'profile/blogCreate'} element={<BlogCreate/>}/>
                    <Route path={'profile/blogUpdate'} element={<BlogUpdate/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                    <Route path={'psychologists/psychologistsDetails/:id'} element={<PsychologistsDetails/>}/>
                    <Route path={'blog/blogDetails/:id'} element={<BlogDetails/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                </Route>
                <Route path={'/admin/'} element={<AdminLayout/>}>
                    <Route index element={<Blog/>}/>
                    <Route path={'dashboard'} element={<Dashboard/>}/>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;