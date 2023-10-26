import React, { useContext, useState } from "react";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvide";
import { axiosClient } from "../utils/axiosClient";
function Code() {
  const { cpp, setCpp } = useContext(DataContext);
  const [Input, setInput] = useState("");
  const [Output, setOutput] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    var code = JSON.stringify(cpp);
    var input = JSON.stringify(Input);
    // console.log(JSON.stringify(cpp));
    // console.log(JSON.stringify(Input));
    // console.log({
    //   code,
    //   input,
    // });
    try {
      const result = await axiosClient.post("/compiler/cpp", {
        code,
        input,
      });
      setOutput(result.result.output);
    } catch (e) {
      console.log(e);
    }
  }
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setInput(event.target.value);
  };
  return (
    <div className="flex  ">
      <button onClick={handleSubmit}>Run</button>
      <Editor value={cpp} onchange={setCpp} />
      <textarea
        className=" bg-gray-500 border border-gray-700 m-5"
        placeholder="Input"
        value={Input}
        onChange={handleMessageChange}
      />

      <textarea
        className=" bg-gray-500 border border-gray-700 m-5"
        placeholder="output"
        value={Output}
      ></textarea>
      {/* {console.log(Input)} */}
    </div>
  );
}

export default Code;
