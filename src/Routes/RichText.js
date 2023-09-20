import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const RichText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
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
        <div class="min-h-[50vh] min-w-[350px] ">
          <JoditEditor ref={editor} value={content} tabIndex={1} />
        </div>
      ) : (
        <div>{AA()}</div>
      )}
    </>
  );
};

export default RichText;
