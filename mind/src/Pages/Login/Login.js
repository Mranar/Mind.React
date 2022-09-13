import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className={'login_section '}>
            <div className={'container'}>

                    <form className={'login_form '}>
                        <div className={'login_box row justify-content-center align-items-center'}>
                        <div className={'col-lg-12  '}>
                           <ul>
                               <li>
                                   <label for={'firstname'}>FirstName</label>
                                   <input type={'text'} id={'firstname'}/>
                               </li>

                               <li>
                                   <label for={'sure_name'}>SureName</label>
                                   <input  type={'text'} id={'sure_name'}/>
                               </li>

                               <li>
                                   <label>Submit</label>
                                   <input type={"submit"} value={'Submit'}/>
                               </li>
                           </ul>
                        </div>
                        </div>
                    </form>

            </div>
        </div>
    );
};

export default Login;