import { useEffect } from "react";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
        duration: 800, // Animation duration in milliseconds
    });
}, []);

    return (
        <div>
            <Navbar></Navbar>
            <p className="text-4xl text-lavender text-center py-10">Our Team</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                 data-aos="fade-up" 
                 data-aos-duration="800"className="rounded-xl overflow-hidden h-96 flex items-center justify-center">
                 <div className="relative hover:border-8 border-lavender rounded-full w-[270px] flex items-center justify-center">
                     <img
                  src="https://i.ibb.co/1Q7Kbg9/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w.jpg"
                         alt="Mr. X"
                         className="w-64 h-64 object-cover object-center rounded-full p-3"
                     />
                    </div>
                    <div className="py-4 px-6 flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800">Sumaiya Sinja</h2>
                        <p className="text-gray-600">CEO and Founder</p>
                    </div>
                </div>

                <div 
                   data-aos="fade-up" 
                   data-aos-duration="800"
                   
                   className="rounded-xl overflow-hidden h-96 flex felx-col md:flex-row items-center justify-center">
                   <div className="relative hover:border-8 border-lavender rounded-full w-[270px] flex items-center justify-center">
                        <img
                     src="https://i.ibb.co/Krv0XWQ/1-qwh-Wmyn-N8ndgc7o-AQQz-WKA.webp"
                            alt="Mr. X"
                            className="w-64 h-64 object-cover object-center rounded-full p-3"
                        />
                    </div>
                    <div className="py-4 px-6 flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800">Mr. X</h2>
                        <p className="text-gray-600">Founder & Team Manager</p>
                    </div>
                </div>
                <div 
                   data-aos="fade-up" 
                   data-aos-duration="800"
                   
                   className="rounded-xl overflow-hidden h-96 flex items-center justify-center">
                   <div className="relative hover:border-8 border-lavender rounded-full w-[270px] flex items-center justify-center">
                        <img
                     src="https://i.ibb.co/QnF7Lv6/370162076-1353948895532758-114744159248260084-n.jpg"
                            alt="Mr. X"
                            className="w-64 h-64 object-cover object-center rounded-full p-3"
                        />
                    </div>
                    <div className="py-4 px-6 flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800">Mr. X</h2>
                        <p className="text-gray-600">Founder & Team Manager</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Team;
