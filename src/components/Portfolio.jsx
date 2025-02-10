import React from 'react';
import java from "../../public/java.png";
// import html from "../../public/html.png";
import express from "../../public/express.png";
// import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
// import css from "../../public/css.jpg";
import mongodb from "../../public/mongodb.jpg";
// import python from "../../public/python.jpg";

function Portfolio() {
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
        }
    ]
  return (
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
<div>
    <h1 className="text-3xl font-bold mb-5">portfolio</h1>
    <span className="underline font-semibold">Featured Projects</span>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                {
            cardItem.map(({id,logo,name }) => (
                <div  className="md:w-[200px] md:h-[250px] border-[2px] rounded-lg  shadow-lg  cursor-pointer hover:scale-105 duration-200" key={id}>
               
                    <img src={logo}
                     className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                    <div>
                        <div className="px-2 font-bold text-xl mb-2">{name}</div>
                        <p className="px-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipiscing elit</p>
                        </div>
                        <div>
                        {/* <button>Video</button>
                        <button>Source code</button> */}
                        </div>
                     </div>
            ))  }
    </div>
</div>
      
    </div>
  )
}

export default Portfolio;
