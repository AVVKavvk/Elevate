import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import "codemirror/mode/python/python";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closebrackets";


function Editor({ value, onchange }) {

  
  return (
    <div className=" gap-5 ">
      
      <CodeMirror
        className="controlled-editor min-w-[600px] mb-5"
        options={{
          mode: "text/x-c++src",
          theme: "material",
          lineNumbers: true,
          autoCloseBrackets: true,
        }}
        value={value}
        onBeforeChange={(editor, data, value) => {
          onchange(value);
        }}
      />
     
    </div>
  );
}

export default Editor;
