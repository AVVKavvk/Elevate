import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const RichText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div class="min-h-[50vh] min-w-[350px] ">
      <JoditEditor ref={editor} value={content} tabIndex={1} />
    </div>
  );
};

export default RichText;
