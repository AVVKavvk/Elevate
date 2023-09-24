import React, { useState, useEffect } from "react";
import AluminiaData from "../assets/Aluminia.json";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";
// State to store the search query

// Function to handle search input change

function Aluminia() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Filter the Aluminai based on the search query
  const filteredAluminai = AluminiaData.filter(temp =>
    temp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  var a = 10;

  useEffect(() => {}, [a]);

  a = getItem(Key_Access_Token);
  // const a = 10;
  function AA() {
    setTimeout(() => {
      navigate("/auth/login");
    }, 100);
  }
  const navigate = useNavigate();
  return (
    <>
      {a != 10 && a != undefined ? (
        <div className="min-h-[100vh] font-mullish overflow-hidden px-6  ">
          {/* <div className="bg-primary min-h-[100vh]  overflow-hidden px-6 "> */}
          <div className="max-w-[1400px] mx-auto mt-5">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 mb-4 border rounded-md  bg-gray-700 text-white"
              // style={{ col !important" }}
            />
          </div>

          <div className="max-w-[1400px] justify-center   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto pb-8 mt-4">
            {filteredAluminai?.map(temp => {
              return (
                <a href={temp.linkedin_url} target="_blank"
                  key={temp.name}
                  className="border shadow-md hover:shadow-lg  bg-slate-300 shadow-blue-400 flex justify-center items-center mx-auto w-[340px] h-[170px] gap-3"
                >
                  <div className="w-[100px] h-[100px] rounded-full border border-blue-500">
                    <a href={temp.image_url} target="_blank">
                      <img
                        src={temp.image_url}
                        alt=""
                        className="w-[100px] h-[100px] rounded-full"
                      />
                    </a>
                  </div>
                  <div className="flex    w-[200px] flex-col justify-center items-center px-2">
                    <h1 className=" text-xl mb-4 ">{temp.name}</h1>
                    <div className="p-1 flex  w-[170px] justify-evenly items-center gap-2 mx-auto">
                      <a href={temp.linkedin_url} target="_blank">
                        <AiFillLinkedin size={35} />
                      </a>
                      <h1 className="font-bold text-lg border bg-blue-400 rounded-md p-1 px-2">
                      {temp.company}
                    </h1>
                    </div>
                   
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <div>{AA()}</div>
      )}
    </>
  );
}

export default Aluminia;
