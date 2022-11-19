import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../Admin/Components/Sidebar/Sidebar";


const AdminLayout = () =>
 <div className={' me-3  row justify-content-between'}>
     <div className={'col-lg-2 '}><Sidebar/></div>

     <div className={'col-lg-10'}><Outlet/></div>
 </div>


export default AdminLayout;