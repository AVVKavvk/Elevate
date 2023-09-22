import React from "react";

import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";

import { count_User, getItem } from "../utils/localStorage";
import { Key_Access_Token } from "../utils/localStorage";

import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import hero1 from "../image/hero1.png";
import hero2 from "../image/hero2.png";
import hero3 from "../image/hero3.png";
import upcoming from '../assets/upcoming.json'
function Home() {
  // const count = useSelector((state) => state.appConfigReducer.count);
  // console.log(count);
  // const dispatch = useDispatch();
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
  const navigate = useNavigate();
  function AA() {
    navigate("/auth/login");
  }


  return (
    <>
      <div class="mt-4 mb-24 mx-4 ">
        <div className=" flex-col font-mullish  max-w-[1250px] flex mx-auto gap-2 justify-center items-center ">
          <div>
            <h1 class="flex gap-3 text-blue-500 md:text-4xl text-3xl ">
              Welcome to
              <h1 class=" text-deepBlue ">
                <Typewriter
                  options={{
                    strings: ["Elevate", "Quarkic"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </h1>
          </div>

          <div class="w-full flex-col md:flex-row mt-8 md:mt-[4.6rem] flex text-gray-600  justify-between gap-5 items-center mx-auto ">
            <img
              src={hero1}
              alt=""
              class="md:w-[500px] w-[300px] h-[330px]  rounded-md"
            />
            <div class="md:w-[50%] w-full text-xl   text-justify px-3 ">
              <p>
                At <span class=" text-2xl font-bold  ">IIIT Pune</span> , we're
                committed to fostering a dynamic learning environment, and our
                website is your gateway to a world of educational resources and
                support. Whether you're a student seeking course materials, a
                researcher exploring the latest findings, or a job-seeker
                looking to craft the perfect resume, we've got you covered.
              </p>
              <div class="flex flex-row justify-between items-center ">
                <h1
                  onClick={AA}
                  class="w-[125px]  font-bold bg-yellow-400 hover:bg-yellow-300 rounded-lg px-2  py-2 mt-5 cursor-pointer"
                >
                  Get Started
                </h1>

                <h1 class="text-xl mt-6 font-bold bg-green-400 rounded-lg px-3 py-3 items-center flex  ">
                  {" "}
                  <span class="text-3xl mr-3"> {count!=undefined?count:"450"}+</span> Students{" "}
                </h1>
              </div>
            </div>
          </div>
          <hr
            class=" flex md:hidden opacity-50 mt-4"
            style={{ border: "1px solid gray", width: "100%" }}
          />
          <div class="w-full flex-col md:flex-row mt-8 md:mt-[4.6rem] mt flex text-gray-600  justify-between gap-5 items-center mx-auto ">
            <img
              src={hero2}
              alt=""
              class="md:w-[450px] w-[300px] h-[300px]  rounded-md"
            />
            <div class="md:w-[50%] w-full text-xl   text-justify px-3 ">
              <p>
                Our website offers a rich repository of notes, labs, and
                previous year's exam papers to boost your academic journey. Dive
                into comprehensive lecture notes, embark on hands-on learning
                experiences, and prepare effectively with real exam papers.We're
                dedicated to providing you with the tools and knowledge you need
                to succeed in your academic and professional pursuits.
              </p>
              <Link to="/user/academics" style={{ textDecoration: "none" }}>
                <h1 class="w-[150px] hidden md:block bg-yellow-400 font-bold hover:bg-yellow-300 rounded-lg px-4 py-3 mt-5 cursor-pointer">
                  Academics
                </h1>
              </Link>

              <div class="flex flex-row justify-between items-center "></div>
            </div>
          </div>
          <hr
            class=" flex md:hidden opacity-50 mt-4"
            style={{ border: "1px solid gray", width: "100%" }}
          />
          <div class="w-full flex-col md:flex-row mt-8  md:mt-[4.6rem] flex text-gray-600  justify-between gap-5 items-center mx-auto ">
            <img
              src={hero3}
              alt=""
              class="md:w-[450px] w-[300px] h-[300px] rounded-md"
            />
            <div class="md:w-[50%] w-full text-xl   text-justify px-3 ">
              <p>
                At <span class=" text-2xl font-bold  ">IIIT Pune</span>, we
                believe in the power of lasting connections. That's why we're
                excited to introduce our Alumni Directory—a dedicated space on
                our website where you can explore the incredible journeys and
                accomplishments of our alumni. Our Alumni Directory is a
                treasure trove of inspiration, featuring profiles and stories of
                former students who have embarked on remarkable paths after
                their time at IIIT Pune.
              </p>
              <Link to="/aluminia" style={{ textDecoration: "none" }}>
                <h1 class="w-[100px] font-bold bg-yellow-400 hover:bg-yellow-300 rounded-lg px-2 py-2 mt-5 cursor-pointer">
                  Alumni
                </h1>
              </Link>

              <div class="flex flex-row justify-between items-center "></div>
            </div>
          </div>
          <hr
            class=" flex opacity-50 mt-4"
            style={{ border: "1px solid gray", width: "100%" }}
          />

          <div class="md:mt-10 flex flex-col justify-center items-center mx-auto ">
            <h1 class="text-4xl bg-green-400 rounded-lg px-5 py-2 mb-6 "> Upcoming Features</h1>
            <div class="md:mt-10  grid md:grid-cols-3  gap-5 justify-center items-center mx-auto ">
              {
                upcoming?.map((item)=>{
                  return (
                    <div class="max-[270px] flex flex-col space-y-4 px-6 rounded-lg text-justify h-[170px] shadow-md hover:scale-105 transition-all duration-200 shadow-slate-400  border border-gray-500 mx-auto justify-center items-center ">
                       <h1 class="text-2xl font-bold ">{item?.title}</h1>
                       <p class=" text-gray-600">{item?.desc}</p>
                    </div>
                  )
                })
              }
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

{
  /* <>
          {a ? (
            " "
          ) : (
            <div class="flex lg:hidden text-xl mx-4 justify-center items-center mt-10 sm:mx-auto flex-col rounded-md max-w-[500px]   border-2 m-5 border-blue-500">
              <h1 class="text-xl m-4 text-deepBlue">
                For Accessing this page please do following steps
              </h1>
              {a ? (
                ""
              ) : (
                <h1 class="m-1 p-2 ">
                  Already have account
                  <Link
                    to="/auth/login"
                    class="bg-blue-700 p-2 m-2 px-2 text-lg rounded-md mb-3 hover:bg-blue-500 transition-all duration-200 "
                  >
                    Login
                  </Link>
                </h1>
              )}
              <h1 class="m-1 p-2 ">
                Do not have account{" "}
                <Link
                  to="/auth/signup"
                  class="bg-blue-700 p-2 m-1 px-2 text-lg rounded-md mb-3 hover:bg-blue-500 transition-all duration-200 "
                >
                  SignUp
                </Link>
              </h1>
            </div>
          )}
        </> */
}
