import React, { useEffect, useState } from "react";
import "./empoweri.css";

const Empoweri = () => {


  const items = Array.from({ length: 200 }, (_, i) => i);



  return (
    <div
      className="transition-opacity duration-500 ease-in-out ">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-5 pb-1 pt-0 lg:pt-10 animate-marquee">
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <h1
                className="font-mondo uppercase text-[40px] md:text-[100px] font-extrabold text-white"> 
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px white",
                  }}>
                Shaping Futures      
                 </span>
                   Empowering Innovion 
              </h1>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empoweri;