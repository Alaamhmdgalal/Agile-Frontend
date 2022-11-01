import React from "react";
import "./TextFiled.css";

function TextField(props) {
    return (
        <div className="textfield">
            <label className="textfield-label">{props.label}</label><br />
            <input className="textfield-input" type="text" name={props.label} id={props.label} />
        </div>
    )
}

export default TextField;