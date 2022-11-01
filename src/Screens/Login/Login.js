import React from "react";
import "./Login.css"
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import logo from '../../Assets/rct-logo.png'
import TextField from "../../Components/TextField/TextField";
import BlueButton from "../../Components/BlueButton/BlueButton"

function Login() {
    return (
        <div className="backGround">
            <div className="Login-Landing">
                <div className="Logo">
                    <img src={logo} alt="Tester" className="rctLogo" />
                </div>
                <div className="login-container">
                    <WhiteContainer>
                        <TextField label="Email" />
                        <TextField label="Password" />
                        <div className="BlueButton">
                            <BlueButton />
                        </div>
                    </WhiteContainer>
                </div>
            </div>
        </div>
    )
}

export default Login;