import React from "react";
import Buttons from "./Buttons";

function Answers(props){
    return (
        <div class="answer" id={props.id}><p></p>
        <Buttons clicked={props.playerChoice} currectAnswer={props.currectAnswer} text={props.answer}></Buttons>
        </div>
    );
}


export default Answers;