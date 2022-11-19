import React, { useEffect, useRef } from "react";
import "./Profile.css";
import Barrier from "../../Components/UI/Barrier/Barrier";
import { GetProfile, GetPsychoProfile } from "../../Store/Profile/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../Store/Fetch/FetchConfiguration";

const Profile = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const userName = useRef(null);
  const email = useRef(null);
  const age = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const experienceYear = useRef(null);
  const phoneNumber = useRef(null);
  const therapyPrice = useRef(null);
  const localAdress = useRef(null);

  async function updatePsychoProfileHandler() {
    // event.preventDefault();
    const user = {
      experienceYear: experienceYear.current?.value,
      phoneNumber: phoneNumber.current?.value,
      therapyPrice: therapyPrice.current?.value,
      localAdress: localAdress.current?.value,
    };

    await fetch(
      `${baseUrl}/Psychologist/update/${
        JSON.parse(localStorage.getItem("user") || "{}").user.id
      }`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}").token
          }`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        navigate("/profile");
      } else {
        return res.json().then((data) => {
          console.log(data);
        });
      }
    });
  }

  async function updateProfileHandler() {
    // event.preventDefault();

    const user = {
      Firstname: firstName.current?.value,
      Lastname: lastName.current?.value,
      UserName: userName.current?.value,
      email: email.current?.value,
      Age: age.current?.value,
    };

    console.log(user);
    await fetch(`${baseUrl}/User/userUpdate/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
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
  }

  

  const profileData = useSelector((state) => state.ProfileSlice);

  console.log(profileData);

  useEffect(() => {
    GetProfile(
      dispatch,
      navigate,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  }, [dispatch, navigate]);


  const psychologistData = useSelector((state) => state.ProfileSlice);
  console.log(psychologistData);
  useEffect(() => {
    GetPsychoProfile(
      dispatch,
      navigate,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  }, [dispatch, navigate]);


  return (
    <div className={"profile"}>
      <Barrier />
      <div className="container bootstrap snippets bootdey">
        <div className="row ng-scope">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <div className="pv-lg">
                  <img
                    className="center-block img-responsive img-circle img-thumbnail thumb96"
                    src={require("../../Assets/Images/default-placeholder-doctor-half-length-portrait-vector-21188690.jpg")}
                    alt="Contact"
                  />
                </div>
                <h3 className="m0 text-bold">
                  {profileData.profile.firstname} {profileData.profile.lastname}
                </h3>
              </div>
              {profileData.profile.isPsycho !== false ? (
                <>
                  <li className="text-center  mt-5">
                    <Link className="btn btn-primary" to={"./blogCreate"}>
                      Create Blog
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="pull-right">
                  <div className="btn-group dropdown">
                    <button
                      className="btn btn-link dropdown-toggle"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <em className="fa fa-ellipsis-v fa-lg text-muted"></em>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-right animated fadeInLeft"
                      role="menu"
                    >
                      <li>
                        <a href="">
                          <span>Send by message</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>Share contact</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>Block contact</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="text-warning">Delete contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h4 text-center me-5">User Information</div>
                <div className="row pv-lg justify-content-center">
                  <div className="col-lg-8">
                    <form
                      onSubmit={updateProfileHandler}
                      className="form-horizontal ng-pristine ng-valid"
                    >
                      <div className="form-group">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="inputContact1"
                        >
                          userName
                        </label>
                        <div className="col-sm-10">
                          <input
                            minLength={4}
                            ref={userName}
                            className="form-control"
                            id="inputContact1"
                            type="text"
                            placeholder={profileData.profile.userName}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="inputContact1"
                        >
                          FirstName
                        </label>
                        <div className="col-sm-10">
                          <input
                            minLength={4}
                            ref={firstName}
                            className="form-control"
                            id="inputContact1"
                            type="text"
                            placeholder={profileData.profile.firstname}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="inputContact1"
                        >
                          SureName
                        </label>
                        <div className="col-sm-10">
                          <input
                            minLength={4}
                            className="form-control"
                            id="inputContact1"
                            type="text"
                            ref={lastName}
                            placeholder={profileData.profile.lastname}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="inputContact1"
                        >
                          Age
                        </label>
                        <div className="col-sm-10">
                          <input
                            className="form-control"
                            id="inputContact1"
                            type="number"
                            ref={age}
                            min={"19"}
                            max={"65"}
                            required={false}
                            defaultValue={profileData.profile.age}
                            placeholder={profileData.profile.age}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="inputContact2"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            className="form-control"
                            id="inputContact2"
                            type="email"
                            ref={email}
                            placeholder={profileData.profile.email}
                          />
                        </div>
                      </div>
                      <div className="form-group mt-5">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button className="btn btn-info" type="submit">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {profileData.profile.isPsycho !== false ? (
              <>
                <li className=" mt-5 ">
                  <div className="col-md-12">
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="h4 text-center me-5">
                          Psychologist Information Update
                        </div>
                        <div className="row pv-lg justify-content-center ">
                          <div className="col-lg-8">
                            <form
                              onSubmit={updatePsychoProfileHandler}
                              className="form-horizontal ng-pristine ng-valid"
                            >
                              <div className="form-group ">
                                <label
                                  className="col-sm-2  control-label"
                                  htmlFor="inputContact1 "
                                >
                                  ExperienceYear
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    className="form-control"
                                    id="inputContact1"
                                    type="number"
                                    ref={experienceYear}
                                    min={"5"}
                                    max={"45"}
                                    required
                                    placeholder={
                                      psychologistData.PsychologistProfile
                                        .experienceYear
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <label
                                  className="col-sm-2 control-label"
                                  htmlFor="inputContact1"
                                >
                                  TherapyPrice
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    className="form-control"
                                    id="inputContact1"
                                    type="number"
                                    ref={therapyPrice}
                                    min={"49"}
                                    max={"200"}
                                    required
                                    placeholder={
                                      psychologistData.PsychologistProfile
                                        .therapyPrice
                                    }
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <label
                                  className="col-sm-2 control-label"
                                  htmlFor="inputContact3"
                                >
                                  Phone
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    className="form-control"
                                    id="inputContact3"
                                    minLength={7}
                                    type="Phone"
                                    ref={phoneNumber}
                                    required
                                    placeholder={
                                      psychologistData.PsychologistProfile
                                        .phoneNumber
                                    }
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <label
                                  className="col-sm-2 control-label"
                                  htmlFor="inputContact6"
                                >
                                  LocalAdress
                                </label>
                                <div className="col-sm-10">
                                  <textarea
                                    className="forfm-control form_text_area"
                                    id="inputContact6"
                                    ref={localAdress}
                                    required
                                    placeholder={
                                        psychologistData.PsychologistProfile
                                        .localAdress    
                                    }
                                    cols={54}
                                    rows={5}
                                  ></textarea>
                                </div>
                              </div>

                              <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                  <button
                                    className="btn btn-info"
                                    type="submit"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
