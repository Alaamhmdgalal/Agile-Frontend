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
                <div>
                    <h2 className="login-title">Login</h2>
                </div>
                <div className="login-container">
                    <WhiteContainer>
                        <TextField label="Email" />
                        <TextField label="Password" />
                        <div className="BlueButton">
                            <BlueButton text="Login" />
                        </div>
                    </WhiteContainer>
                </div>
            </div>
        </div>
    )
}

export default Login;