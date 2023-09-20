import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ResumePage() {
  const [A, setA] = useState(false);
  return (
    <div class="min-h-[100vh] flex mt-10  flex-col px-1 mx-auto  ">
      <div class=" mb-20 flex md:flex-row flex-col gap-10 justify-center mx-auto  ">
        <Link
          to="/resume/in-5-min"
          onClick={() => {
            setA(true);
          }}
        >
          <div class="text-xl rounded-lg w-[320px] h-[150px] bg-green-300 items-center text-center  justify-center flex flex-col ">
            <div class="text-xl rounded-lg w-[300px] h-[130px] bg-blue-400 items-center text-center  justify-center flex flex-col ">
                <h1 class="text-2xl">Resume in just 5 mintue </h1>
                <h1>Template Given just fill information </h1>
            </div>
          </div>
        </Link>
        <Link
          to="/resume/customize"
          onClick={() => {
            setA(true);
          }}
        >
         <div class="text-xl rounded-lg w-[320px]   h-[150px] bg-green-300 items-center text-center  justify-center flex flex-col ">
            <div class="text-xl rounded-lg w-[300px] h-[130px] bg-blue-400 items-center text-center  justify-center flex flex-col ">
                <h1 class="text-2xl">Create New Template</h1>
                <h1>Using Richtext Editor </h1>
            </div>
          </div>
        </Link>
      </div>

      {A ? <Outlet /> : ""}
    </div>
  );
}

export default ResumePage;
 