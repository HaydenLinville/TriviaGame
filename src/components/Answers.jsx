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
        bgcolor: "#6d4c41",
        "&:hover": {
          bgcolor: "#5d4037",
        },
      }}
    >
      <Buttons
        clicked={props.playerChoice}
        currectAnswer={props.currectAnswer}
        text={props.answer}
        color={props.color}
        hcolor={props.hcolor}
      ></Buttons>
    </Box>
  );
}

export default Answers;
