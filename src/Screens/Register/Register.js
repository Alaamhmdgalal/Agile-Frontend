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
                    <div className="TwoColumns">
                        <WhiteContainer>
                            <TextField label="First Name" />
                            <TextField label="Email" type="email" />
                            <TextField label="Password" type="password" />
                            <TextField label="Strava Link" />

                            <div className="gender">
                                <label for="gender" >Gender</label>
                                <br />
                                <input type="radio" value="male" id="male" name="gender" />
                                <label for="male">Male</label>

                                <input type="radio" value="female" id="female" name="gender" />
                                <label for="female">Female</label>
                            </div>
                        </WhiteContainer>
                        <WhiteContainer>
                            <TextField label="Last Name" />
                            <TextField label="Phone" />
                            <TextField label="Verify Password" type="password" />
                            <TextField label="Date of Birth" type="date" />
                        </WhiteContainer>
                    </div>
                    <div className="BlueButton">
                        <BlueButton text="Register" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
