import React from "react";
import "./BlueButton.css"

function BlueButton(props) {
    return (
        <button className="BlueButton-Container">
            {props.text}
        </button>
    )
}
export default BlueButton;