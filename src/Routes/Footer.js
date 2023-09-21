import React, { useEffect } from "react";
import Links from "../assets/NavbarItems1.json";
import { Key_Access_Token, count_User, getItem } from "../utils/localStorage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Footer() {
  const a = getItem(Key_Access_Token);
  var b = useSelector(state => state.appConfigReducer.count);
  var count = 450;
  if (b === 0) {
    count = getItem(count_User);
  } else {
    count = b;
  }

  useEffect(() => {
    count = getItem(count_User);
  }, [count]);

  return (
    <div class=" bg-deepBlueHead px-3 text-white flex flex-col md:flex-row mx-auto justify-evenly items-center pb-7 ">
      <div class=" md:h-[300px]    pb-10  md:pb-20 mx-auto max-w-[1200px] px-5 space-y-10  ">
        <div class="flex flex-col py-8 sm:flex-row items-center ">
          {/* <div class="hidden h-[200px] z-30 w-[1px]  sm:mr-2 md:ml-52 bg-[#fff] lg:block"></div> */}
          <div class="flex flex-col mx-auto text-3xl justify-center   text-justify items-center  pb-5   text-white  ">
            {" "}
            <h1 class=" mt-5">
              {" "}
              <a href="https://www.iiitp.ac.in/" target="_blank">
                IIIT Pune
              </a>
            </h1>
            <div class=" flex justify-center  items-center flex-col mb-2  ">
              <div class=" grid grid-cols-3 sm:flex  justify-center sm:justify-between items-center sm:gap-5 px-3 text-xl text-red-600 mt-4">
                <a
                  href="https://placements.iiitp.ac.in/"
                  target="_blank"
                  class="hover:underline transition-all duration-200"
                >
                  Placements
                </a>
                <a
                  href="https://www.iiitp.ac.in/contact-us"
                  target="_blank"
                  class="hover:underline transition-all ml-6 sm:ml-0 duration-200"
                >
                  Contact
                </a>
                <a
                  href="https://www.iiitp.ac.in/page/faculty-0"
                  target="_blank"
                  class="hover:underline transition-all ml-4 sm:ml-0 duration-200"
                >
                  Faculty
                </a>
                <a
                  href="https://www.iiitp.ac.in/page/upcoming-campus-iiit-pune"
                  target="_blank"
                  class="hover:underline transition-all duration-200"
                >
                  Campus
                </a>
              </div>
            </div>
            <div class="mt-4 text-base text-center border-t border-brColor pt-10">
              Copyright © 2023 Elevate. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col px-4 justify-center
       items-center mx-auto"
      >
        <h1 class="text-2xl mb-3"> <span>{count!=undefined?count:"450"}+</span> Students</h1>
        <hr style={{border:"1px solid gray",width:"300px"}} />
        <div class="grid grid-cols-2 gap-2 mt-6  text-xl justify-center items-center mx-auto ">
  {Links?.map((item)=>{
    return (
      <Link to={item?.link} class="mx-10"> {item?.tag}</Link>
    )
  })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
