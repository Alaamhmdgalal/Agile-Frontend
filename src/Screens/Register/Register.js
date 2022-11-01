import React from "react";
import './Register.css'
import logo from '../../Assets/rct-logo.png'
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import TextField from "../../Components/TextField/TextField";
import BlueButton from "../../Components/BlueButton/BlueButton"

function Register() {
    return (
        <div className="backGround">
            <div className="Register-landing">
                <div className="Logo">
                    <img src={logo} alt="Tester" className="rctLogo" />
                </div>
                <div>
                    <h2 className="register-title">Register</h2>
                </div>
                <div className="register-container">
                    <WhiteContainer>
                        <TextField label="First Name" />
                        <TextField label="Last Name" />
                        <TextField label="Email" />
                        <TextField label="Password" />
                        <TextField label="Phone Number" />
                        <div className="BlueButton">
                            <BlueButton text="Register" />
                        </div>
                    </WhiteContainer>
                </div>
            </div>
        </div>
    )
}

export default Register;
