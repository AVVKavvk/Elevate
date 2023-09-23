import React from "react";
import ll from "../image/l2.svg";
import lll from "../image/l2l.png";
import llll from "../image/l2ll.svg";
import { Link } from "react-router-dom";
function Sem2() {
  return (
    <div class="mx-auto sm:w-[500px]  md:max-w-[1000px] mt-7 ">
      <h1 class=" text-2xl text-red-500 ">When you want to see Labs then use your Logged In Email</h1>
    <div class=" sm:w-[600px] mx-auto  md:max-w-[1000px] grid grid-cols-1  sm:grid-cols-3 relative gap-2 pt-4 space-y-5  sm:space-x-3 p-5 sm:space-y-5 mt-8 overflow-hidden">
      <div class="relative flex flex-col justify-center sm:mt-10 items-center text-center mt-10  w-full sm:h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1Soo7LJkt28qmZjGGY95o5UbogRvyHxf9?usp=share_link"
            target="_blank"
          >
            <div>
              <img
                src={ll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>
          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">DSA</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full sm:h-[250px] space-x-16  px-5 ">
        <div>
        {/* <Link to="/user/unavail" style={{ textDecoration: "none" }}>
            <div>
              <img
                src={llll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </Link> */}
          <a href="https://drive.google.com/drive/folders/1qZ6ug0GYhzmTTzJM0d3Y97iSmY0nbMMp?usp=sharing" target="_blank">
            <div>
              <img
                src={llll}
                alt=""
                class="hover:scale-110 rounded-lg transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">DLD</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full sm:h-[250px] space-x-16  px-5 ">
        <div>
          <a href="https://drive.google.com/drive/folders/1SIk6ejIl6EZaU9md3DqS24ytzi_Lfynq?usp=share_link" target="_blank">
            <div>
              <img
                src={lll}
                alt=""
                class="hover:scale-110 rounded-lg transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">OOPL</h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Sem2;
