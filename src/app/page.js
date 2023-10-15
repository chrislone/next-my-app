"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  function changeUserNameHandler(val) {
    console.log("changeUserNameHandler: ", val.target.value);
    setInputValue(val.target.value);
  }

  function updateHandler() {
    axios.post("/update", {
      userName: inputValue,
    });
  }

  return (
    <div id="contact">
      <div class="input-wrap">
        <input value={inputValue} onChange={changeUserNameHandler} />
      </div>
      <button type="submit" onClick={updateHandler} className="submit-btn">
        update
      </button>
    </div>
  );
}
