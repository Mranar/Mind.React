import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {GetPsychologists} from "../../../Store/Psychologist/PsychologistSlice.jsx"
import "./PsychologistsDetails.css";
const PsychologistsDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const PsychologistData = useSelector((state) => state.PsychologistSlice);
  
  console.log(PsychologistData.Psychologist);
  useEffect(() => {
    GetPsychologists(
      dispatch,
      navigate,
      id
    );
  }, [dispatch, navigate , id]);





  return (
    <div className={"psycho_details  "}>
      <div className="container-fluid ">
        <div className="row ng-scope  ">
          <div className="col-md-12 mt-5">
            <div className="panel-top panel-default ">
              <div className="panel-body text-center">
                <div className="pv-lg">
                  <img
                    className="center-block img-responsive img-circle img-thumbnail thumb96"
                    src={require("../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg")}
                    alt="Contact"
                  />
                </div>

                <div className="row col-lg-12 justify-content-center mb-5">
                  <div className={"col-lg-12  mb-5 p-0"}>
                    <h3 className="m0 text-bold">{PsychologistData.Psychologist.firstname }   {PsychologistData.Psychologist.lastname } </h3>
                  </div>

                  <div className="psycho_border col-lg-4 ms-1 fw-bold ">
                    <h1 className={"py-3"}>Psychologist Information</h1>
                    <ul>
                      <li>
                        <p>Experience Year : {PsychologistData.Psychologist.firstname } </p>
                      </li>
                      <li>
                        <p>Local adress : {PsychologistData.Psychologist.localAdress} </p>
                      </li>
                      <li>
                        <p>phone number : {PsychologistData.Psychologist.phoneNumber } </p>
                      </li>
                      <li>
                        <p>email :{PsychologistData.Psychologist.email }  </p>
                      </li>
                    </ul>
                  </div>

                  <div className={"col-lg-7 psycho_border"}>
                    <h3 className="  text-bold py-2">
                      Therapy Price:{" "}
                      <span className={"fw-bold h1 text-danger"}>{PsychologistData.Psychologist.therapyPrice}$</span>
                    </h3>
                    <div className="mv-lg pb-5 row ">
                      <div className={"col-lg-6 m-auto fw-bold "}>
                        <label htmlFor="hour"> choose the time:</label>
                        <select
                          className={"mx-4 psycho_select "}
                          name="hours"
                          id="hour"
                        >
                          <option className={"bg-img "} value=""></option>
                          <option className={"psycho_options"} value="09:00 Am">
                            09:00 Am
                          </option>
                          <option className={"psycho_options"} value="10:00 Am">
                            10:00 Am
                          </option>
                          <option className={"psycho_options"} value="11:00 Am">
                            11:00 Am
                          </option>
                          <option className={"psycho_options"} value="12:00 Am">
                            12:00 Am
                          </option>
                          <option className={"psycho_options"} value="01:00 Pm">
                            01:00 Pm
                          </option>
                          <option className={"psycho_options"} value="02:00 Am">
                            02:00 Am
                          </option>
                          <option className={"psycho_options"} value="03:00 Am">
                            03:00 Am
                          </option>
                          <option className={"psycho_options"} value="04:00 Am">
                            04:00 Am
                          </option>
                          <option className={"psycho_options"} value="05:00 Am">
                            05:00 Am
                          </option>
                        </select>
                        <a className="btn buy_btn mt-2 fw-bold " href={`https://meet.google.com/gex-mxsd-evw`}>
                          Buy now
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistsDetails;
