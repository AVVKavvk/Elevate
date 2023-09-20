import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "./image/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
// import { Dropdown } from "antd";
import { Key_Access_Token, count_User, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { Dropdown, Space } from "antd";
import NavbarItem1 from "./assets/NavbarItems1.json";
function Navbar() {
  const a = getItem(Key_Access_Token);
  var b = useSelector(state => state.appConfigReducer.count);
  var count = 1;
  if (b === 0) {
    count = getItem(count_User);
  } else {
    count = b;
  }
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    count = getItem(count_User);
  }, [count]);

  const items = [
    {
      label: (
        <Link to="/user/notes" style={{ textDecoration: "none" }}>
          Notes
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/user/labs" style={{ textDecoration: "none" }}>
          Labs
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/user/paper" style={{ textDecoration: "none" }}>
          Paper
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <div class="font-mullish mt-4 md:mt-1 w-full max-w-[1200px] mx-auto relative rounded-sm text-xl px-3  ">
      {/* //TODO /simple */}
      <div class="sm:hidden flex justify-between w-full  items-center max-w-[600px] relative ">
        <a href="">
          <img src={logo} alt="" width="180px" height="120px" />
        </a>

        <div class="flex relative w-[65%] justify-end pr-3">
          {/* <img
          src={
          alt="menu"
          class="w-[28px] h-[28px] object-contain cursor-pointer bg-black "
          onClick={() => setToggle(!toggle)}
          />{" "} */}
          <RxHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
          <div
            class={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#e5e4e2] absolute text-black  w-[120%] top-7 left-16 transition-all duration-200   my-3  z-10 rounded-xl `}
          >
            <ul class=" flex flex-col justify-end items-center gap-1 ">
              {NavbarItem1?.map(item => {
                return (
                  <li
                    class={` text-[16px] font-josefin font-medium cursor-pointer transition-all duration-200 `}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                      {item.tag}
                    </Link>
                  </li>
                );
              })}
              <>
                {a ? (
                  <>
                    <Link to="/user/logout" style={{ textDecoration: "none" }}>
                      <li class="text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200 ">
                        {" "}
                        LogOut
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <li class="  text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200">
                      <Link to="/auth/login" style={{ textDecoration: "none" }}>
                        Login
                      </Link>
                    </li>
                    <li class="   text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200">
                      <Link
                        to="/auth/signup"
                        style={{ textDecoration: "none" }}
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </>
            </ul>
          </div>
        </div>

        {/* <div>
          <ul class="flex sm:hidden justify-center items-center  gap-4 px-3">
            <>
              {a ? (
                <>
                  <Link to="/auth/visitor" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl flex justify-center items-center group ">
                      {" "}
                      Users{" "}
                      <span class="text-2xl ml-2 group-hover:scale-125 transition-all duration-300    ">
                        {count}{" "}
                      </span>
                    </li>
                  </Link>
                  <Link to="/user/logout" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl relative  p-1 group rounded-md px-2 transition-all duration-200 flex justify-center items-center group ">
                      {" "}
                      <AiOutlineLogout />
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <li class="   p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </li>
                  <li class="   p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div> */}
      </div>

      {/* //TODO /sm */}
      <div class="flex lg:max-w-[1300px] mx-auto  justify-center items-center  rounded-lg">
        <div class="w-[23%]  pb-3 sm:flex hidden  ">
          <a href="#">
            {" "}
            <img src={logo} alt="" width="250px" />{" "}
          </a>
        </div>
        <div class="w-[75%] flex flex-row  flex-wrap  justify-evenly items-center mx-auto">
          <ul className="nav_bar sm:flex justify-center  items-center gap-3 hidden   ">
            <li class="hover:underline  p-2 rounded-md transition-all duration-500">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            {/* <li class="hover:underline cursor-pointer    p-2 rounded-md transition-all duration-500">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a class="l" onClick={e => e.preventDefault()}>
                  <Space>Academics</Space>
                </a>
              </Dropdown>
            </li> */}

            <li class="hover:underline  p-2 rounded-md transition-all duration-500">
              <Link to="/user/academics" style={{ textDecoration: "none" }}>
                Academics
              </Link>
            </li>
            <li class="hover:underline  p-2 rounded-md transition-all duration-500">
              <Link to="/aluminia" style={{ textDecoration: "none" }}>
                Alumni
              </Link>
            </li>
            <li class="hover:underline  p-2 rounded-md transition-all duration-500">
              <Link to="/resume" style={{ textDecoration: "none" }}>
                Resume
              </Link>
            </li>
            <li class="hover:underline  p-2 rounded-md transition-all duration-500">
              <Link to="/user/creator" style={{ textDecoration: "none" }}>
                AboutUs
              </Link>
            </li>
          </ul>

          <ul class="sm:flex hidden justify-center items-center gap-4 px-3">
            <>
              {a ? (
                <>
                  <Link to="/user/logout" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl relative group  p-1 hover:underline rounded-md px-2 transition-all duration-200 flex justify-center items-center group ">
                      {" "}
                      <AiOutlineLogout />
                      {/* <span class="text-4xl ml-4 group-hover:scale-125 transition-all duration-300    ">
                    {count}{" "}
                  </span> */}
                      <p class="absolute text-sm hidden group-hover:flex -top-4 ">
                        Logout{" "}
                      </p>
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <li class="hover:underline p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </li>
                  <li class="hover:underline    p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <Link to="/auth/visitor" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl flex justify-center items-center group ">
                      {" "}
                      Users{" "}
                      <span class="text-2xl ml-2 group-hover:scale-125 transition-all duration-300    ">
                        {count}{" "}
                      </span>
                    </li>
                  </Link> */
}
{
  /* <Link to="/auth/visitor" style={{ textDecoration: "none" }}>
                  <li class=" text-2xl flex justify-center items-center hover:underline group ">
                    {" "}
                    Users{" "}
                    <span class="text-2xl ml-4  transition-all duration-300    ">
                      {count}{" "}
                    </span>
                  </li>
                </Link> */
}
