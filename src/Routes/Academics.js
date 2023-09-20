import React from "react";
import { Link } from "react-router-dom";
import i1 from "../image/doubleArrow.svg";
import wave from "../image/wave.svg";
import { FiExternalLink } from "react-icons/fi";
import notes from "../image/notes.png";
import labs from "../image/labs.png";
import papers from "../image/papers.png";

function Academics() {
  const content = [
    {
      link: "/user/notes",
      tag: "Notes",
      description:
        "These handwritten notes provide valuable insights from the previous year, offering a unique perspective on the subject matter.",
    },
    {
      link: "/user/labs",
      tag: "Labs",
      description:
        "These labs represent a repository of knowledge and practical experience from the preceding year, serving as a valuable learning resource.",
    },
    {
      link: "/user/paper",
      tag: "Papers",
      description:
        "These exam papers from the previous year offer a comprehensive review of topics, aiding in effective exam preparation and performance.",
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
            Our extensive notes repository is designed to be your ultimate study
            companion. Dive into a wealth of lecture notes, handouts, and study
            materials, meticulously curated to cover every aspect of your
            courses. Whether you're revising for an exam, working on an
            assignment, or simply expanding your knowledge, you'll find these
            notes invaluable.
          </p>
          <img src={notes} alt="" width="400px" class="rounded-md" />
        </div>
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <img src={labs} alt="" width="400px" class="rounded-md" />
          <p>
            Welcome to our interactive labs section, where learning goes beyond
            textbooks. Here, you can immerse yourself in hands-on learning
            experiences that bridge the gap between theory and practice. Our
            labs offer a variety of experiments, simulations, and practical
            exercises to reinforce your understanding of complex concepts.
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
          <img src={papers} alt="" width="400px" class="rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Academics;
