import React from 'react';
import './Login.css';
import Barrier from "../../Components/UI/Barrier/Barrier";
import backgroundImg from "../../Assets/Images/footer-bg.jpg";

const Login = () => {
    return (
       <div>
           <Barrier/>
           <div style={{ backgroundImage: `url(${backgroundImg})`  }} className={'login_section  '}>
               <div className={'container  mt-5 '}>

                   <form className={'login_form  '}>
                       <div className={'login_box row  '}>
                           <div className={'col-lg-12 text-center '}>
                               <h1 className={'text-center ms-4 pt-5'}>Login</h1>
                               <ul className={'login_elements '}>
                                   <li>
                                       <input placeholder={'Username'} type={'text'} id={'username'}/>
                                   </li>

                                   <li>
                                       <input  placeholder={'Password'}  type={'password'} id={'password'}/>
                                   </li>

                                   <li>
                                       <input className={'submit_button fw-bold'} type={"submit"} value={'Submit'}/>
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