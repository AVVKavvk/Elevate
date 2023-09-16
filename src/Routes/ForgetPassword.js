import React, { useState } from "react";
import { Form, Input } from "antd";

import {  useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";

import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const dispatch = useDispatch();
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.put("/auth/", {
        email,
        password,
        confirmpassword: conpassword,
      });
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
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div class="flex justify-center   mx-auto  p-4 mb-4 items-center ">
      
      <div class="flex  flex-col justify-center items-center mx-auto h-[360px] mb-5 lg:h-[360px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
        <Form
          
        >
          <Form.Item
            
            name="email"
            
          >
            <Input
              class=""
              placeholder="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            
            name="password"
            
          >
            <Input.Password
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            
            name="Confirm password"
            
          >
            <Input.Password
              placeholder="confirm password"
              onChange={(e) => setconpassword(e.target.value)}
            />
          </Form.Item>

          

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={submitHandle}
            >
              Update
            </button>
          </Form.Item>
        </Form>
        
       
      </div>
    </div>
  );
}

export default ForgetPassword;
