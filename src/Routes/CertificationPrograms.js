import React from "react";
import Cerificate from "../assets/certificate.json";
function CertificationPrograms() {
  return (
    <div className=" max-w-[1200px] mb-6 mt-5 flex pb-5  flex-col border rounded-md  justify-center items-center mx-auto px-4">
      <h1 class="text-3xl m-2 ">Certificates And Courses</h1>
      <div class="grid md:grid-cols-3 mt-8 justify-center gap-5 items-center mx-auto ">
        {Cerificate?.map(item => {
          return (
            <div class="flex bg-gray-100 justify-center items-center p-4 rounded-md border shadow shadow-blue-400 gap-3 w-[335px] mx-auto ">
              <div class="flex flex-col w-[40%]  justify-center  items-center mx-auto gap-4 ">
                <img src={item?.img_url} alt="" width="80px" />
                <h1>{item?.company_name}</h1>
              </div>
              <div class="w-[1px] bg-gray-400 h-[120px]"></div>
              <div class="flex flex-col w-[52%] justify-center items-center mx-auto gap-4 ">
                <div class="flex flex-col  justify-center items-center mx-auto gap-4 ">
                  <p class=" text-[15px]">{item?.course_name}</p>
                </div>
                <a
                  href={item?.link}
                  class=" bg-green-400 px-5 text-xl hover:bg-green-500 py-1 rounded-md"
                  target="_blank"
                >
                  Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CertificationPrograms;
