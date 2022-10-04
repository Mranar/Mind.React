import React from 'react';
import './Register.css'
import Barrier from "../../Components/UI/Barrier/Barrier";
const Register = () => {
    return (
       <div>
           <Barrier/>
           <div  className={'register_section'}>

               <div className={'container   '}>

                   <form  className={'register_form  '}>
                       <div className={'register_box row  '}>
                           <div className={'col-lg-12 text-center '}>
                               <h1 className={'text-center ms-4 '}>Register</h1>
                               <ul className={'register_elements '}>
                                   <li>
                                       <input placeholder={'Name'} type={'text'} id={'name'}/>
                                   </li>

                                   <li>
                                       <input placeholder={'SureName'} type={'text'} id={'sure_name'}/>
                                   </li>

                                   <li>
                                       <input placeholder={'Email'} type={'email'} id={'mail'}/>
                                   </li>

                                   <li>
                                       <input placeholder={'UserName'} type={'text'} id={'username'}/>
                                   </li>

                                   <li>
                                       <input  placeholder={'Password'}  type={'password'} id={'password'}/>
                                   </li>

                                   <li>
                                       <input className={'submit_button'} type={"submit"} value={'Submit'}/>
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

export default Register;