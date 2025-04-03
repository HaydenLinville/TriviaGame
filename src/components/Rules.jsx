import React from "react";
import Buttons from "./Buttons";

function Rules(props) {
  return (
    <div class="starting-screen">
      <h2>Rules:</h2>
      <ol>
        <li>You have 3 lives</li>
        <li>You have 30 seconds per question</li>
        <li>You have 10 questions</li>
      </ol>
      <Buttons
        clicked={props.clicked}
        color={"#1976d2"}
        hcolor={"#115293"}
        text="Press Start"
      ></Buttons>
    </div>
  );
}

export default Rules;
