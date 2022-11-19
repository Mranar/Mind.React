import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className={'sidebar  px-5'}>
           <ul className={''}>
               <li><a href="/admin"><h1>Mind</h1></a></li>
               <li><a href="/dashboard"></a></li>
               <li><a href="/dashboard"></a></li>
           </ul>
        </div>
    );
};

export default Sidebar;