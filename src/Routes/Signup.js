import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import { isValidPhoneNumber } from "react-phone-number-input";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setError] = useState("");
  const [err1, setError1] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  useEffect(() => {
    if (!isValidEmail(email)) {
      setError("Email is invalid");
    } else {
      setError("a");
    }
    if (number && isValidPhoneNumber(number)) {
      setError1("a");
    } else {
      setError1("Phone Number Not Valid ");
    }
    // console.log(err);
    // console.log(err1);
  }, [email, number]);
  async function handleSignup(e) {
    e.preventDefault();

    if (err === "a" && err1 == "a") {
      try {
        const result = await axiosClient.post("/auth/signup", {
          email,
          password,
          name,
          number,
        });
        // setItem(Key_Access_Token,result.result.token)
        // console.log(result);
        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: `${result.result}`,
          })
        );
        setTimeout(() => {
          dispatch(
            showToast({
              type: TOAST_SUCCESS,
              message: "Now Login",
            })
          );
        }, 2000);
        if (result) {
          //
          navigate("/auth/login");
        }
      } catch (e) {}
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      // dispatch(
      //   showToast({
      //     type: TOAST_ERROR,
      //     message: `${e}`,
      //   })
      // );
    } else {
      if (err != "a") {
        dispatch(
          showToast({
            type: TOAST_ERROR,
            message: `${err}`,
          })
        );
      }
      if (err1 != "a") {
        dispatch(
          showToast({
            type: TOAST_ERROR,
            message: `${err1}`,
          })
        );
      }
    }
    // console.log(error);
  }
  return (
    <div class="grid items-center mx-auto  ">
      <div class="flex flex-col px-10 mx-auto mt-10 h-[550px] w-[320px]  justify-center items-center sm:mx-auto sm:h-[600px] sm:p-10  border-2 sm:w-[500px] mb-5 rounded-lg sm:mt-2  border-green-400">
        <Form
          onSubmit={handleSignup}
          name="basic"
          autoComplete="off"
          class=" w-[270px] sm:w-[350px]"
        >
          <Form.Item>
            <label value="name" class="text-white">
              {" "}
              <h1 class=" text-lg my-2 ">
                {" "}
                <span class="text-red-500">*</span> Name
              </h1>
            </label>
            <Input
              placeholder="vipin"
              onChange={e => setname(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="phNo">
            <label value="phNo" class="text-white">
              {" "}
              <h1 class=" text-lg my-2 ">
                {" "}
                <span class="text-red-500">*</span> Phone Number
              </h1>
            </label>
            <Input
              placeholder="+91810709...."
              onChange={e => setnumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="email">
            <label value="email" class="text-white">
              {" "}
              <h1 class=" text-lg my-2 ">
                {" "}
                <span class="text-red-500">*</span> Email
              </h1>
            </label>
            <Input
              class=""
              type="email"
              placeholder="vipin...6@gmail.com"
              onChange={e => setemail(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="password">
            <label value="password" class="text-white">
              {" "}
              <h1 class=" text-lg my-2 ">
                {" "}
                <span class="text-red-500">*</span> Password
              </h1>
            </label>
            <Input.Password
              placeholder="password"
              onChange={e => setpassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-500 w-[100px] text-white rounded-md text-lg hover:bg-blue-600 transition-all duration-200 p-1 "
              onClick={handleSignup}
            >
              Sign-Up
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
