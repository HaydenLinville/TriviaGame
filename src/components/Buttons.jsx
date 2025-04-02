import React from "react";
import Button from '@mui/material/Button';


function Buttons(props){

    return (
        <Button sx={{fontSize: 20}} onClick={()=>{
            props.clicked(props.text, props.currectAnswer)
        }
    } variant="contained">{props.text}</Button>
    );
}

export default Buttons;