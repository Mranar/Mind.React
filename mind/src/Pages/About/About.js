import React from 'react';
import Barrier from "../../Components/UI/Barrier/Barrier";
import './About.css'
import SimpleSlider from "../../Components/Slider/Slider";
const About = () => {
    return (
        <div className={'about '}>
            <Barrier></Barrier>
            <SimpleSlider/>
       <div className={'container'}>
           <div className={'row text-center'}>
               <div className={'about_top my-5 col-lg-12'}>
                   <h1>About MIND</h1>
                   <h4 className={'pt-3'}>We will take care of your Mind</h4>
               </div>

               <div className={'about_bottom mb-5 col-lg-12'}>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere enim eu felis pretium porta. Morbi porta in lacus sit amet tristique. Vestibulum aliquam quam at justo dignissim rhoncus. Phasellus eget suscipit sapien. Nulla accumsan tortor quis quam faucibus fermentum. Cras sagittis lacinia egestas. Duis porttitor lacus enim, vitae pulvinar felis interdum sed. Pellentesque tincidunt rhoncus metus vitae finibus. Donec blandit tellus et suscipit lobortis. Proin a lorem dolor. Aenean dignissim velit ut nunc hendrerit, eu faucibus elit ullamcorper. Duis posuere sapien nec tortor rhoncus mollis.

                       Suspendisse in purus fringilla, congue nisl id, iaculis tellus. Maecenas id leo id turpis suscipit semper sed at mi. Curabitur dapibus semper elit at hendrerit. Pellentesque quis tincidunt sapien. Curabitur elementum sapien at turpis laoreet hendrerit. Nunc metus dui, aliquet a suscipit eget, pretium et massa. In hac habitasse platea dictumst. Sed ultrices ullamcorper viverra. Vestibulum vel odio nec augue luctus convallis vel eu est. Curabitur mollis ex in mattis rutrum. Nunc id urna semper, mattis nisi a, venenatis libero. Phasellus varius orci non tellus scelerisque, condimentum fringilla quam semper. Nam aliquet turpis egestas, tincidunt justo sit amet, imperdiet augue.

                       Vestibulum nibh augue, tempus in massa non, dignissim ultrices mi. Suspendisse potenti. Sed aliquam non sapien ut pretium. Cras a tortor ut ex luctus porta ac vitae odio. Donec euismod egestas mi sit amet ultricies. Aenean aliquet urna nunc, vitae maximus arcu vulputate et. Maecenas congue tempus tristique.

                       In ac tortor augue. Suspendisse eleifend metus tempus libero

                   </p>

                   <p className={'my-2'}>pretium elementum. Cras tempor lacus et enim accumsan porta. Aenean et lectus velit. Sed vel leo turpis. Donec quis leo lobortis, sagittis mauris eget, volutpat augue. Ut maximus tempor augue, non hendrerit tortor convallis id. Donec iaculis posuere aliquet. Donec accumsan libero ac tempus volutpat. Vestibulum euismod sagittis nibh in maximus. Ut a mi non nisi posuere varius. Vestibulum non mauris at eros mollis tempor.

                       Suspendisse velit lectus, vulputate tempor pharetra id, rhoncus sit amet tellus. Nullam ornare eget urna ut fringilla. Ut at commodo diam. Maecenas commodo volutpat erat, vitae tempor lectus feugiat vitae. Pellentesque congue blandit nulla vitae fermentum. Integer scelerisque consequat lectus non auctor. Aliquam volutpat dolor ut ante ultricies volutpat. Praesent ornare eu sem vel dapibus. Donec faucibus risus magna, eget gravida dui eleifend non. Donec non sodales odio, ac tincidunt lectus.

                       Generated 5 paragraphs, 379  tempor pharetra id, rhoncus sit amet tellus. Nullam ornare eget urna ut fringilla. Ut at commodo diam. Maecenas commodo volutpat erat, vitae tempor lectus feugiat vitae. Pellentesque congue blandit nulla vitae fermentum. Integer scelerisque consequat lectus non auctor. Aliquam volutpat dolor ut ante ultricies volutpat. Praesent ornare eu sem vel dapibus. Donec faucibus risus magna, eget gravida dui eleifend non. Donec non sodales odio, ac tincidunt lectus.</p>
               </div>

           </div>
       </div>
        </div>
    );
};

export default About;