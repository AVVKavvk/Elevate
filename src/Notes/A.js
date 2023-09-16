import React from "react";

function A() {
  return (
    <div class="lg:w-[1200px] mt-7 mx-auto  ">
      <div class="flex text-center p-4  justify-center rounded-lg w-[300px]  mt-9 bg-green-300  mx-auto sm:w-[500px] md:w-[700px] ">
        <h1 class="text-2xl ">
          Choose any one of the semester
          <span class=" text-red-500"> Notes </span> you want to access
        </h1>
      </div>
      <hr
        style={{
          height: "1px",
          backgroundColor: "#000000",
          border: "none",
        }}
        class="m-3"
      />

      {/* <div class="mx-auto flex flex-col justify-center items-center mt-5 mb-10 ">
        <h1 class=" text-white max-w-[500px] p-2 text-xl  sm:text-2xl text-center mb-8">
          {" "}
          <span class="text-2xl sm:text-3xl mx-3">
            {" "}
            Acknowledgement
          </span>{" "}
          for Notes
        </h1>
        <div class="max-w-[1000px] flex-col sm:flex-row  sm:space-y-0 flex mx-auto justify-center gap-6 items-center ">
          {acknowledgement?.map(item => {
            return (
              <div class="border border-white text-white flex-col flex gap-4 justify-center mx-auto items-center w-[150px] h-[100px]">
                <h1>{item.name}</h1>
                <a
                  target="_blank"
                  href={item.LinkedIn_url}
                  class="hover:scale-125 transition-all  flex  justify-center items-center gap-3 duration-500 "
                >
                  {" "}
                  <BsLinkedin /> linkedIn
                </a>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default A;
