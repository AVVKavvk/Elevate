import React from "react";
import { Link } from "react-router-dom";
import i1 from "../image/doubleArrow.svg";
import wave from "../image/wave.svg";
import { FiExternalLink } from "react-icons/fi";
import alumni from "../image/alumni.png";
import resume from "../image/resume.png";
import certificate from "../image/certificate.png";

function Placement() {
  const content = [
    {
      link: "/aluminia",
      tag: "Alumni",
      description:
        "Welcome to Elevate, your alumni network connecting past and future success stories. Reconnect, collaborate, and grow together. Join Elevate today!",
    },
    {
      link: "/resume",
      tag: "Resume",
      description:
        "Elevate offers a free resume builder to enhance your professional profile. Join us for networking, career growth, and powerful resume-building opportunities.",
    },
    {
      link: "/certificates",
      tag: "Certificates",
      description:
        "Elevate also provides complimentary certificates to enhance your engineering journey. Join us for networking and career growth opportunities today.",
    },
  ];
  return (
    <div className=" hidden md:flex font-mullish mt-4 mb-10 md:mt-5  rounded-md  max-w-[1400px] mx-auto relative text-xl">
      <div className="w-[27%] rounded-md flex flex-col border border-gray-300 justify-between gap-3">
        {content?.map(item => {
          return (
            <Link to={item?.link}>
              <div class="w-full relative cursor-pointer  min-h-[15rem] group rounded-md">
                <img
                  src={i1}
                  alt=""
                  class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
                />
                <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
                  <div>
                    <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                      {item?.tag}
                    </h1>
                    <p class="font-mullish text-grayText mt-6">
                      {item?.description}
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
              <hr class="mt-5" />
            </Link>
          );
        })}
      </div>
      <div className=" w-[69%] ml-[3%] gap-5">
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <p>
            Elevate, the pinnacle of professional networking, is delighted to
            extend a warm welcome to our esteemed alumni. As you step into our
            world, you enter a realm of infinite opportunities to reconnect,
            access invaluable resources, and stay updated on pivotal events.
            Within this distinguished community, you can effortlessly rekindle
            past associations and foster fresh connections through our extensive
            directory.
          </p>
          <img src={alumni} alt="" width="400px" class="rounded-md" />
        </div>
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <img src={resume} alt="" width="400px" class="rounded-md" />
          <p>
            Elevate offers a powerful resume builder, helping you craft and
            showcase your professional journey. Join us in uniting the past and
            future, and become a vital part of this dynamic network. Register
            with Elevate today to shape your destiny while celebrating your
            academic heritage.
          </p>
        </div>
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <p>
            Preparing for exams has never been more effective. Gain a
            competitive edge with access to previous year's exam papers, a
            valuable resource for every student. By practicing with real exam
            questions, you'll not only get a feel for the format but also
            identify key topics and trends in your curriculum.
          </p>
          <img src={certificate} alt="" width="380px" class="rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Placement;
