import React, { useRef, useState } from 'react';
import './Register.css'
import Barrier from "../../Components/UI/Barrier/Barrier";
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Store/Fetch/FetchConfiguration';


const Register = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();


    async function createUserHandler(event){
        event.preventDefault();
        
        const user = {
        firstName: firstName.current?.value,
        lastName: lastName.current?.value,
        userName: userName.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        }

        await fetch(`${baseUrl}/Auth/register`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              navigate("/Login");
              return res.json();
            } else {
              return res.json().then((data) => {
                console.log(data);
              });
            }
          });



    };


    return (
       <div>
           <Barrier/>
           <div  className={'register_section'}>

               <div className={'container'}>

                   <form onSubmit ={createUserHandler}  className={'register_form  '}>
                       <div className={'register_box row  '}>
                           <div className={'col-lg-12 text-center '}>
                               <h1 className={'text-center ms-4 '}>Register</h1>
                               <ul className={'register_elements '}>
                                   <li>
                                       <input
                                        placeholder={'FirstName'} 
                                        type='text'
                                        id={'name'}
                                        minLength={3}
                                        ref={firstName}/>
                                   </li>

                                   <li>
                                       <input
                                        placeholder={'LastName'} 
                                        type='text'
                                        id={'sure_name'}
                                        ref={lastName}
                                        minLength={3}/>
                                        

                                   </li>

                                   <li>
                                       <input
                                        placeholder={'Email'} 
                                        type='email'
                                        id={'mail'}
                                        ref={email}/>
                                   </li>

                                   <li>
                                       <input
                                        placeholder={'UserName'} 
                                        type='text'
                                        id={'username'}
                                        ref={userName}/>
                                   </li>

                                   <li>
                                       <input
                                         placeholder={'Password'} 
                                          type='password'
                                          id={'password'}
                                          minLength={7}
                                          ref={password}/>
                                   </li>

                                   <li>
                                       <input
                                        className={'submit_button'} 
                                        type="submit"
                                         vaue={'Submit'}/>
                                   </li>
                               </ul>
                               <li>
                  <Link to={"psychologistRegister"}>Are You Psychologist?</Link>
                  
                </li>
                           </div>
                       </div>
                   </form>

               </div>
           </div>
       </div>
    );
};

export default Register;