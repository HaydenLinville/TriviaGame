import React from "react";
import Questions from "./Questions";
import Answers from "./Answers";
import Timer from "./Timer";

function TriviaBox(props) {
  return (
    <div class="trivia-box">
      <Questions id={props.id} question={props.question} />
      <div class="answers">
        {props.answers.map((a) => (
          <Answers
            playerChoice={props.playerChoice}
            currectAnswer={props.currectAnswer}
            key={a.index}
            id={a.index}
            answer={a}
          />
        ))}
      </div>
    </div>
  );
}

export default TriviaBox;
