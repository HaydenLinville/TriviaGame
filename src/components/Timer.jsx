import React, { useState } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: "white" }}>
          {`${Math.round(props.percent)}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Timer(props) {
  return (
    <CircularProgressWithLabel percent={props.countD} value={props.percent} />
  );
}

// function Timer(props) {

//   return <Box sx={{width:30, height: 30, bgcolor: 'green'}}>{props.countD}</Box>;
// }

// export default Timer;
