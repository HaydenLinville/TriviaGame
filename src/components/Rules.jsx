import React from "react";
import Buttons from "./Buttons";

function Rules(props) {
  return (
    <div class="starting-screen">
      <h2>Rules:</h2>
      <ul>
        <li>3 lives</li>
        <li>30 seconds per question</li>
        <li>10 questions</li>
      </ul>
      <Buttons
        clicked={props.clicked}
        color={"#455a64"}
        hcolor={"#37474f"}
        text="Press Start"
      ></Buttons>
    </div>
  );
}

export default Rules;
