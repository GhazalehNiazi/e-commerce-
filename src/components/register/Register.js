import React, { useState } from "react";
import SignInForm from "./SignInForm";
import image from "../../assets/register.webp";
import SignUpForm from "./SignUpForm";

function Register() {
  console.log("hello");
  const [changeMethod, setChangeMethod] = useState(false);

  function changeMethodHandler() {
    setChangeMethod(!changeMethod);
    console.log("changinnnnnnnnnnnnnnnnnnnnnn");
  }
  return (
    <div className="register">
      {/*<div>Login To Your Account</div>*/}
      {changeMethod ? (
        <SignInForm onChangeMethod={changeMethodHandler} />
      ) : (
        <SignUpForm onChangeMethod={changeMethodHandler} changeMethod />
      )}
      <div className="imageContainer">
        <img src={image} />
      </div>
    </div>
  );
}

export default Register;
