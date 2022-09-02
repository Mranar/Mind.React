import React from 'react';
import '../../Style/Main.css'



const Header = () => {
    return (
        <div className={'header'}>
            <nav className="navbar">

                <div className="logo">Mind</div>

                <ul className="nav-links">

                    <input type="checkbox" id="checkbox_toggle"/>
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Psycologists</a></li>
                        <li className="services">
                            <a href="/">Services</a>

                            <ul className="dropdown">
                                <li><a href="/">About </a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Register</a></li>
                    </div>
                </ul>
            </nav>


        </div>
    );
};

export default Header;