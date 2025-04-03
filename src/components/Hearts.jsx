import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Hearts(props) {
  return (
    <FavoriteIcon id={props.id} sx={{ fontSize: 110, color: props.color }} />
  );
}

export default Hearts;
