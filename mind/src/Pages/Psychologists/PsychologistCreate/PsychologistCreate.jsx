import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../Store/Fetch/FetchConfiguration';
import { GetProfile } from '../../../Store/Profile/ProfileSlice';

export const PsychologistCreate = () => {
    

    const ExperienceYear = useRef(null);
    const PhoneNumber = useRef(null);
    const TherapyPrice = useRef(null);
    const LocalAdress = useRef(null);
    

    const dispatch = useDispatch();
    const navigate = useNavigate();
  

  

    async function updatePsychoProfileHandler(event){
        event.preventDefault();
        
        const user = {
            LocalAdress: LocalAdress.current?.value,
            PhoneNumber: PhoneNumber.current?.value,
            ExperienceYear: ExperienceYear.current?.value,
            TherapyPrice: TherapyPrice.current?.value,
            }
       

        await fetch(`${baseUrl}/User/userUpdate`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              navigate("/profile");
              return res.json();
            } else {
              return res.json().then((data) => {
                console.log(data);
              });
            }
          });



    };


    const profileData = useSelector((state) => state.ProfileSlice);
      
    console.log(profileData);

    useEffect(() => {
        GetProfile(
          dispatch,
          navigate,
          JSON.parse(localStorage.getItem("user") || "{}").user.id
        );
      }, [dispatch, navigate]);


  return (
    <div>
         <div className="col-md-8">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="pull-right">
                                        <div className="btn-group dropdown" >
                                            <button className="btn btn-link dropdown-toggle"
                                                    aria-haspopup="true" aria-expanded="false"><em
                                                className="fa fa-ellipsis-v fa-lg text-muted"></em></button>
                                            <ul className="dropdown-menu dropdown-menu-right animated fadeInLeft"
                                                role="menu">
                                                <li><a href=""><span>Send by message</span></a></li>
                                                <li><a href=""><span>Share contact</span></a></li>
                                                <li><a href=""><span>Block contact</span></a></li>
                                                <li><a href=""><span className="text-warning">Delete contact</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h4 text-center me-5">User Information Update</div>
                                    <div className="row pv-lg justify-content-center">
                                        <div className="col-lg-8">
                                            <form onSubmit={updatePsychoProfileHandler} className="form-horizontal ng-pristine ng-valid">
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact1">ExperienceYear</label>
                                                    <div className="col-sm-10">
                                                        <input 
                                                        className="form-control" 
                                                        id="inputContact1"
                                                        type="number"
                                                        ref={ExperienceYear}
                                                        min={'1'}  max={'45'} 
                                                        placeholder={profileData.profile.age} />
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact1">TherapyPrice</label>
                                                    <div className="col-sm-10">
                                                        <input 
                                                        className="form-control" 
                                                        id="inputContact1"
                                                        type="number"
                                                        ref={TherapyPrice}
                                                        min={'49'}  max={'200'} 
                                                        placeholder={profileData.profile.age} />
                                                    </div>

                                                </div>
                                                
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact3">Phone</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                        className="form-control" 
                                                        id="inputContact3"
                                                        type="Phone" placeholder={"(123) 465 789"}/>
                                                    </div>
                                                </div>
                                               
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact6">LocalAdress</label>
                                                    <div className="col-sm-10">
                                                        <textarea 
                                                        className="forfm-control" 
                                                        id="inputContact6"
                                                        ref={LocalAdress}
                                                        rows={10}>
                                                        </textarea>
                                                    </div>
                                                </div>
                                             
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button className="btn btn-info" type="submit">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

         
    </div>
  )
}


export default PsychologistCreate;