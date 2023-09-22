import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import i1 from "../image/doubleArrow.svg";
import wave from "../image/wave.svg";
import { FiExternalLink } from "react-icons/fi";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
import { useDispatch } from "react-redux";
function ResumePage() {
  const [A, setA] = useState(false);
  const dispatch = useDispatch();
  function Click() {
    dispatch(
      showToast({
        type: TOAST_SUCCESS,
        message: "Scroll",
      })
    );
  }
  return (
    <div class="min-h-[100vh] max-w-[1400px] flex mt-10  flex-col md:px-1 mx-auto  ">
      <div class=" mb-20 md:w-[920px] w-[350px] flex-wrap flex md:flex-row  flex-col gap-10 justify-center mx-auto  ">
        <Link
          to="/resume/in-5-min"
          onClick={() => {
            setA(true);
            Click();
          }}
          class="border  border-gray-300 md:w-[45%] w-[330px] h-[330px] md:h-[260px] mx-auto rounded-md"
        >
          <div class="w-full -z-30 relative cursor-pointer  min-h-[16.2rem] group rounded-md">
            <img
              src={i1}
              alt=""
              class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
            />
            <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
              <div>
                <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                  Instant Resume Builder
                </h1>
                <p class="font-mullish text-grayText mt-6">
                  Create a professional resume in just 5 minutes! Our Express
                  Resume Generator simplifies the process—no design skills
                  needed. Enter your details into our predefined template, and
                  let us handle the formatting. Choose from various template
                  styles to match your preference.
                </p>
                <img
                  src={wave}
                  alt=""
                  class="hidden absolute bottom-0 right-0 group-hover:block transition-all duration-200"
                />
              </div>
              <div class="flex items-center space-x-2 font-mullish font-bold text-lightBlue group">
                <FiExternalLink
                  size={40}
                  class="px-1 mx-1 mt-0 group-hover:text-grayBlue"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resume/customize"
          onClick={() => {
            setA(true);
            Click();
          }}
          class="border  border-gray-300 md:w-[50%] w-[330px] h-[370px] md:h-[260px] mx-auto rounded-md"
        >
          <div class="w-full  relative cursor-pointer  min-h-[16.2rem] group rounded-md">
            <img
              src={i1}
              alt=""
              class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
            />
            <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
              <div>
                <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                  Build Your Resume from Scratch
                </h1>
                <p class="font-mullish text-grayText mt-6">
                  Crafting a unique resume has never been easier. Create a
                  personalized resume tailored to your skills and experiences.
                  Our user-friendly resume builder allows you to start from
                  scratch, adding your own sections, content, and formatting.
                  Once you're done, download your professionally designed resume
                  with just a click.
                </p>
                <img
                  src={wave}
                  alt=""
                  class="hidden absolute bottom-0 right-0 group-hover:block transition-all duration-200"
                />
              </div>
              <div class="flex items-center space-x-2 font-mullish font-bold text-lightBlue group">
                <FiExternalLink
                  size={40}
                  class="px-1 mx-1 mt-0 group-hover:text-grayBlue"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {A ? <Outlet /> : ""}
    </div>
  );
}

export default ResumePage;
