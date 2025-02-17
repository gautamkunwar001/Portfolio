import React from 'react';
import java from "../../public/java.png";
import html from "../../public/html.png";
import express from "../../public/express.png";
import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import css from "../../public/css.jpg";
import mongodb from "../../public/mongodb.jpg";
import sql from "../../public/sql.png";
// import python from "../../public/python.jpg";

function Skills() {
    const cardItem = [
        {
            id:1,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:4,
            logo:node,
            name:"nodeJs"
        },
        {
            id:5,
            logo:java,
            name:"java"
        },
        {
            id:6,
            logo:javascript,
            name:"javascript"
        },
        {
            id:7,
            logo:html,
            name:"html"
        },
        {
            id:8,
            logo:css,
            name:"css"
        },
        {
            id: 9,
            logo: sql,
            name: "SQL"
        },
    ]
  return (
      <div name="Skills" 
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
<div>
    <h1 className="text-4xl text-pink-700 font-bold mb-5">skills</h1>
    {/* <span className="underline font-semibold">Featured Projects</span> */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                {
            cardItem.map(({id,logo,name }) => (
                <div 
                 className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" 
                 key={id}>
               
                    <img src={logo}
                     className="w-[150px] rounded-full" alt="" />
                    <div>
                        <div className="">{name}</div>
                       
                        {/* <p className="px-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipiscing elit</p> */}
                        
                        
                        </div>
                        <div>
                        </div>
                     </div>
            ))  }
    </div>
</div>
      
    </div>
  )
}

export default Skills;
