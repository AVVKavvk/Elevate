import React from "react";
import ll from "../image/ml.png";
import lll from "../image/se.png";


function Sem5() {
  return (
    <div class="mx-auto sm:w-[500px]  md:max-w-[1000px] mt-7 ">
      {/* <h1 class=" text-2xl text-red-500 ">When you want to see Labs then use your Logged In Email</h1> */}
    <div class=" sm:w-[500px]  md:max-w-[1000px] grid grid-cols-1  sm:grid-cols-2 mx-auto relative gap-2 pt-4 space-y-5 mt-8 overflow-hidden">
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1df_hAonu297dNKgnLWHr7XEEV_JlE3oT?usp=sharing"
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

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">ML</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1TMcletvQckr1KvQijLVq4ySFhblZAVcC?usp=sharing"
            target="_blank"
          >
            <div>
              <img
                src={lll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">SE</h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Sem5;
