/** @format */

import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import CallBackChild from "./CallBackChild";

const CallBackHook = () => {
  const [Counter, setCounter] = useState(0);
  const [Input, setInput] = useState("");
  const [Msg, setMsg] = useState("");
  useEffect(() => {
    console.log("Parent Component is re-rendered!");
  }, [Counter, Input, Msg]);

  let IncrementHandler = () => {
    setCounter(Counter + 1);
  };

  let DecrementHandler = () => {
    setCounter(Counter - 1);
  };
//   let DisplayMsg =useCallback( () => {
//     return `Hello I Am Arun From Parent Component,Msg is ${Msg}`;
//   },[Msg])
    let DisplayMsg = () => {
      return `Hello I Am Arun From Parent Component,Msg is ${Msg}`;
    };
  let SendHandler=()=>{
        setMsg(Input);
   }

  return (
    <>
      <div>
        <button id="btn" onClick={IncrementHandler}>
          Increment
        </button>
        <h1>{Counter}</h1>
        <button id="btn" onClick={DecrementHandler}>
          Decrement
        </button>
      </div>
      <div>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={SendHandler}>Send Msg</button>
      </div>

      <div>
        <CallBackChild DisplayMsg={DisplayMsg} />
      </div>
    </>
  );
};

export default CallBackHook;
