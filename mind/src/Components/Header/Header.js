import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetUserData } from "../../Store/User/UserInfoSlice";
import { logout } from "../../Store/Auth/AuthSlice";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const userData = useSelector((state) => state.UserInfoSlice);



  console.log(userData);



  const logoutHandler = () => {
      dispatch(logout(userData));
      localStorage.clear("user" , JSON.stringify(userData));
      navigate("/login")
      
  };

  useEffect(() => {
    GetUserData(dispatch);
  }, [])

  return (
    <div className={"header"}>
      <nav className="navbar">
        <div className="logo">Mind</div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./psychologists"}>Psycologists</Link>
            </li>
            <li>
              <Link to={"./blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"./about"}>About </Link>
            </li>
            <li>
              <Link to={"./contact"}>Contact</Link>
            </li>

            {JSON.stringify(userData.userData) !== "{}" ? (
              <>
                <li>
                  <Link to={"./profile"}>{userData.userData.userName}</Link>
                </li>
                <li>
                  <form onSubmit={logoutHandler}>
                  <button className="btn p-0" >logout</button>
                  
                  </form>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"./login"}>Login</Link>
                </li>
                <li>
                  <Link to={"./register"}>Register</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
