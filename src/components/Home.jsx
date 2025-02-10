import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/photo.avif";
function Home() {
  return (
    <>
        <div 
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-x1">Welcome In my Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello I'm a</h1>
            <ReactTyped
        //   typedRef={setTyped}
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={100}
          backspeed={20}
          loop={true}
        />
            {/* <span className = "text-red-700 font-bold">Developer</span> */}
            </div>
            <br />
            
            <p className="text-sm md:text-md text-justify">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ea quidem vero ipsum cumque
                 consectetur quibusdam exercitationem,
                  ratione odio beatae nihil doloremque 
                  necessitatibus hic maiores reiciendis 
                  sit commodi ipsa officiis omnis.
            </p>
            <br />
             {/* social media */}
             <div className="flex flex-col items-center md: flex-row justify-between space-y-6 md:space-y-0">
             <div className="space-y-2">
                <h1 className="font-bold ">Avilable on</h1>
                <ul className="flex space-x-5">
                    <li> 
                        <a href="https://www.linkedin.com/in/gautam-kunwar-0590312b3/">
                        <FaLinkedin className="text-2xl cursor-pointer"/>
                        </a>
                        </li>
                    <li><FaWhatsappSquare className="text-2xl cursor-pointer"/></li>
                </ul>
             </div>

             <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <ul className="flex space-x-5">
                <TbBrandNodejs className="text-2xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <SiExpress className="text-2xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <SiMongodb className="text-2xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <FaReact className="text-2xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                </ul>
             </div>
             </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic}
             className="rounded-full md:w-[450px] md:h-[450px]" 
            alt=""
            />
            </div>
        </div>
        </div>

        <hr />
    </>
  )
}

export default Home;
