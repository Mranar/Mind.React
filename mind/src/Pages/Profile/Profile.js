import React from 'react';
import './Profile.css'
import Barrier from "../../Components/UI/Barrier/Barrier";

const Profile = () => {
    return (
        <div className={'profile'}>

                <Barrier/>
                <div className="container bootstrap snippets bootdey">
                    <div className="row ng-scope">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-body text-center">
                                    <div className="pv-lg"><img
                                        className="center-block img-responsive img-circle img-thumbnail thumb96"
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Contact"/></div>
                                    <h3 className="m0 text-bold">Audrey Hunt</h3>
                                    <div className="mv-lg">
                                        <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                            presentation text. Have fun!</p>
                                    </div>
                                    <div className="text-center"><a className="btn btn-primary" href="">Send message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="h4 text-center">Psychologist Information</div>
                                    <div className="row pv-lg justify-content-center">
                                        <div className="col-lg-8">
                                            <form className="form-horizontal ng-pristine ng-valid">
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact1">Name</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact1" type="text"
                                                               placeholder="" value="Audrey Hunt"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact2">Email</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact2" type="email"
                                                               value="mail@example.com"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact3">Phone</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact3" type="text"
                                                               value="(123) 465 789"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact4">Mobile</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact4" type="text"
                                                               value="(12) 123 987 465"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact5">Website</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact5" type="text"
                                                               value="http://some.wesbite.com"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact6">Address</label>
                                                    <div className="col-sm-10">
                                                        <textarea className="form-control" id="inputContact6" rows={4}>Some nice Street, 1234</textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact7">Social</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact7" type="text"
                                                               value="@Social"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label"
                                                           htmlFor="inputContact8">Company</label>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" id="inputContact8" type="text"
                                                               placeholder="No Company"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <div className="checkbox">
                                                            <label>

                                                                <input type={'checkbox'}/> Favorite contact
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button className="btn btn-info" type="submit">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="text-right"><a className="text-muted" href="#">Delete this
                                                contact?</a></div>
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

export default Profile;