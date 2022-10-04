import React from 'react';
import Barrier from "../../Components/UI/Barrier/Barrier";
import './Contact.css'
const Contact = () => {
    return (
        <div className={'contact_us'}>
            <Barrier/>
            <div className="row pv-lg justify-content-center">
                <div className="col-lg-2"></div>
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
                            <div className="col-sm-offset-2 my-4 col-sm-10">

                            </div>
                        </div>
                        <div className="form-group text-center mb-5">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-info " type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;