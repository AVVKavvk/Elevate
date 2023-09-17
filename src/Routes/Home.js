import React from "react";

import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

import { getItem } from "../utils/localStorage";
import { Key_Access_Token } from "../utils/localStorage";

import Footer from "./Footer";

function Home() {
  // const count = useSelector((state) => state.appConfigReducer.count);
  // // console.log(count);
  // const dispatch = useDispatch();
  const a = getItem(Key_Access_Token);

  return (
    <>
      <div class="mt-6">
        <div className=" flex-col  lg:flex  hidden mx-auto sm:w-[400px] lg:w-[500px] mb-12  text-4xl justify-center text-blue-500    ">
          <h1 class="flex gap-3   ">
            Welcome to
            <h1 class=" text-deepBlue ">
              <Typewriter
                options={{
                  strings: ["Elevate", "Quarkic World"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </h1>
        </div>

        
      </div>

    

      <Footer />
    </>
  );
}

export default Home;

{/* <>
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
        </> */}