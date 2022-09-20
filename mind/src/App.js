import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Psychologists from "./Pages/Psychologists/Psychologists";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/psychologists'} element={<Psychologists/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default App;