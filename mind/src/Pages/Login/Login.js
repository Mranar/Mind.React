import React, {useRef, useState} from 'react';

import './Login.css';
import Barrier from "../../Components/UI/Barrier/Barrier";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../Store/Fetch/FetchConfiguration";
import {login} from "../../Store/Auth/AuthSlice";
import {GetUserData} from "../../Store/User/UserInfoSlice";

const Login = () => {
 const username = useRef(null);
 const password = useRef(null);
 const navigate = useNavigate();
 const dispatch = useDispatch();


async function loginHandler(event){
event.preventDefault();

const user = {
    username: username.current?.value,
    password: password.current?.value,
};


    const loggedUser = await fetch(`${baseUrl}/Auth/login`,{
    method : "POST",
    body : JSON.stringify(user),
    headers : {

        Accept: "application/json , text/plain",
        "Content-type": "application/json; charset=UTF-8",
        },
     }).then((res) =>{
        if (res.ok){
            return res.json();
        }
        else {
            return res.json().then((data) => {
                console.log(data);
            });
        }
    });

    dispatch(login(loggedUser));
    localStorage.setItem("user" , JSON.stringify(loggedUser));
    GetUserData(dispatch);
    navigate("/");
 }

    return (
       <div>
           <Barrier/>
           <div  className={'login_section  '}>
               <div className={'container '}>

                   <form onSubmit={loginHandler} className={'login_form  '}>
                       <div className={'login_box row  '}>
                           <div className={'col-lg-12 text-center '}>
                               <h1 className={'text-center ms-4 '}>Login</h1>
                               <ul className={'login_elements '}>
                                   <li>
                                       <input placeholder={'Username'} type='text' id={'username'} ref={username}/>
                                   </li>

                                   <li>
                                       <input  placeholder={'Password'}  type='password' id={'password'} ref={password}/>
                                   </li>

                                   <li>
                                       <input className={'submit_button fw-bold'} type="submit" value={'Submit'}/>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </form>

               </div>
           </div>
       </div>
    );
};

export default Login;