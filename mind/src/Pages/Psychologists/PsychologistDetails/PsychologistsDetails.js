import React from 'react';
import './PsychologistsDetails.css'
import Barrier from "../../../Components/UI/Barrier/Barrier";
import SimpleSlider from "../../../Components/Slider/Slider";
const PsychologistsDetails = () => {
    return (
        <div className={'psycho_details  ' }>

            <Barrier/>
            <div className="container-fluid bootstrap snippets  ">
                <div className="row ng-scope  ">
                    <div className="col-md-4 mt-5">
                        <div className="panel-top panel-default ">
                            <div className="panel-body text-center">
                                <div className="pv-lg"><img
                                    className="center-block img-responsive img-circle img-thumbnail thumb96"
                                    src={require('../../../Assets/Images/sigmund-jzz_3jWMzHA-unsplash.jpg')} alt="Contact"/></div>
                                <h3 className="m0 text-bold">Audrey Hunt</h3>
                                <div className="mv-lg">
                                    <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                        presentation text. Have fun!</p>
                                        <h3 className="mt-5 text-bold py-4">Therapy</h3>
                                        <div className="mv-lg pb-5 row ">
                                            <p className={'fw-bold'}>4.99$</p>

                                        <div className="text-center col-lg-12"><a className="btn buy_btn " href="">Buy Therapy</a>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="col-md-8  ">
                        <div className="panel   panel-default">

                                <div className="row pv-lg justify-content-center psycho_info ">
                                    <div className="h4 text-center fw-bold">Psychologist Information</div>

                                    <div className="col-lg-8 mt-4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere enim eu felis pretium porta. Morbi porta in lacus sit amet tristique. Vestibulum aliquam quam at justo dignissim rhoncus. Phasellus eget suscipit sapien. Nulla accumsan tortor quis quam faucibus fermentum. Cras sagittis lacinia egestas. Duis porttitor lacus enim, vitae pulvinar felis interdum sed. Pellentesque tincidunt rhoncus metus vitae finibus. Donec blandit tellus et suscipit lobortis. Proin a lorem dolor. Aenean dignissim velit ut nunc hendrerit, eu faucibus elit ullamcorper. Duis posuere sapien nec tortor rhoncus mollis.

                                            Suspendisse in purus fringilla, congue nisl id, iaculis tellus. Maecenas id leo id turpis suscipit semper sed at mi. Curabitur dapibus semper elit at hendrerit. Pellentesque quis tincidunt sapien. Curabitur elementum sapien at turpis laoreet hendrerit. Nunc metus dui, aliquet a suscipit eget, pretium et massa. In hac habitasse platea dictumst. Sed ultrices ullamcorper viverra. Vestibulum vel odio nec augue luctus convallis vel eu est. Curabitur mollis ex in mattis rutrum. Nunc id urna semper, mattis nisi a, venenatis libero. Phasellus varius orci non tellus scelerisque, condimentum fringilla quam semper. Nam aliquet turpis egestas, tincidunt justo sit amet, imperdiet augue.

                                            Vestibulum nibh augue, tempus in massa non, dignissim ultrices mi. Suspendisse potenti. Sed aliquam non sapien ut pretium. Cras a tortor ut ex luctus porta ac vitae odio. Donec euismod egestas mi sit amet ultricies. Aenean aliquet urna nunc, vitae maximus arcu vulputate et. Maecenas congue tempus tristique.

                                            Generated 5 paragraphs, 379 words, 2576 bytes of Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere enim eu felis pretium porta. Morbi porta in lacus sit amet tristique. Vestibulum aliquam quam at justo dignissim rhoncus. Phasellus eget suscipit sapien. Nulla accumsan tortor quis quam faucibus fermentum. Cras sagittis lacinia egestas. Duis porttitor lacus enim, vitae pulvinar felis interdum sed. Pellentesque tincidunt rhoncus metus vitae finibus. Donec blandit tellus et suscipit lobortis. Proin a lorem dolor. </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                   <div className={'m-auto mb-5 col-lg-11'}> <SimpleSlider/></div>
                </div>
            </div>

        </div>
    );
};

export default PsychologistsDetails;