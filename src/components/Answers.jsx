import React from "react";
import Buttons from "./Buttons";
import Box from "@mui/material/Box";

function Answers(props) {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: 270,
        height: 150,
        borderRadius: 1,
        bgcolor: "#616161",
        
      }}
    >
      <Buttons
        clicked={props.playerChoice}
        currectAnswer={props.currectAnswer}
        text={props.answer}
        color={"#455a64"}
        hcolor={"#37474f"}
      ></Buttons>
    </Box>
  );
}

export default Answers;
