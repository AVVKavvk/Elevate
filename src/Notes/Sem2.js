import React from "react";
import ll from "../image/logo3.svg";
import llv from "../image/videoLOGO.svg";
import Notes2 from "../assets/Notes/Notes2.json";
function Sem2() {
  return (
    <div class=" lg:w-[1200px] grid sm:grid-cols-3 grid-cols-2 space-y-5 pb-12 lg:space-y-0 ml-6 lg:mx-auto lg:grid-cols-7 relative  justify-evenly  mt-8 overflow-hidden">
      {Notes2?.map(item => {
        return (
          <div class="relative flex p-0 mt-[20px] lg:mt-0 flex-col space-x-6 ">
            <div class="h-[120px]">
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#eeeff4] h-[80%] w-[80%]  relative z-[8]  transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
           m 0 6
           a 6 6 0 0 1 6 -6 
           h 250.32501220703125
           a 16 16 0 0 1 11 5 
           l 77 77 
           a 16 16 0 0 1 5 11 
           v 126
           a 6 6 0 0 1 -6 6 
           h -337.32501220703125
           a 6 6 0 0 1 -6 -6 
           z"
                  fill="#8885e3"
                ></path>
              </svg>
              <h1 class="absolute z-10 top-[30px] left-[40px] text-2xl  ">
                {item?.subject_name}
              </h1>
            </div>
            {item?.PDF?.map(pdfItem => {
              return (
                <a
                  href={pdfItem?.pdrUrl}
                  rel="noreferrer"
                  target="_blank"
                  class=""
                >
                  <div class="group relative mb-6 ">
                    <img
                      src={ll}
                      alt=""
                      class="hover:scale-110 transition-all duration-500"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </a>
              );
            })}

            {item?.video?.map(videoItem => {
              return (
                <a href={videoItem?.video_url} rel="noreferrer" target="_blank">
                  <div class="group relative mb-5 mt-5">
                    <img
                      src={llv}
                      alt=""
                      class="hover:scale-110 transition-all duration-500"
                      height="100px"
                      width="100px"
                    />
                    <div class="sm:group-hover:block -top-3 px-2 bg-blue-400 p-1  rounded-lg -left-3 absolute hidden">
                      Lecture
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Sem2;
