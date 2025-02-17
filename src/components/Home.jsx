import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { ReactTyped , Typed } from "react-typed";
// import Typed from "react-typed";
import pic from "../../public/photo.avif";
function Home() {
  return (
    <>
        <div 
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            {/* <span className="text-x1">Welcome In my Feed</span> */}
            <h2>Hello , I am</h2>
            <h1 className="flex space-x-1 text-2xl md:text-4xl">Gautam Kunwar</h1>
            <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1> And I'm a</h1>
            <br />
            <ReactTyped 
            className = "text-pink-700  font-bold"
          strings={["Developer", "Programmer"]}
          typeSpeed={100}
          backspeed={20}
          loop={true}
        />
      
        
            
            </div>
            
            <h3>I want to grow as a Full-Stack Developer, contribute to innovative projects, and enhance my skills. My goal is to work on impactful web applications that solve real-world problems.</h3>
            <br />
        
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
                        <li>
                          <a href="mailto:1999gautamkr@gmail.com"> 
                          <MdEmail className="text-2xl cursor pointer "/>
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.me/918800618131"  target="_blank">
                          <FaWhatsapp className="text-2xl cursor pointer "/>
                          </a>
                        </li>
                    <li>
                      <a href="https://github.com/gautamkunwar001">
                      <FaGithub  className="text-2xl cursor-pointer"/>
                      </a>
                      </li>
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
