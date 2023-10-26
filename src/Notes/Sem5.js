import React from "react";
import ll from "../image/logo4.svg";
import Notes5 from "../assets/Notes/Notes5.json";
function Sem5() {
  return (
    <div class="mx-auto lg:w-[1200px] mt-7 ">
    {/* <h1 class=" text-2xl text-red-500 ">When you want to open Notes then use your Logged In Email</h1> */}
    <div class="lg:w-[600px] grid pb-10 sm:grid-cols-3 grid-cols-2 space-y-5 lg:space-y-0 ml-6 lg:mx-auto lg:grid-cols-3 relative  justify-evenly  mt-8 overflow-hidden">
      {Notes5?.map(item => {
        return (
          <div class="relative flex flex-col  p-0 mt-[20px] lg:mt-0 space-x-6 ">
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
                  fill="#E97451"
                ></path>
              </svg>
              <h1 class="absolute z-10 top-[30px] left-[50px] text-2xl  ">
                {item.subject_name}
              </h1>
            </div>
            {item?.PDF?.map(pdfItem => {
              return (
                <a href={pdfItem?.pdrUrl} rel="noreferrer" target="_blank">
                  <div>
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
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Sem5;
