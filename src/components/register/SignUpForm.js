import React, { useRef, useState } from "react";

function SignUpForm(props) {
  let nameRef = useRef();
  const nameInputChangeHandler = (e) => {
    nameRef = e.target.value;
  };

  let emailRef = useRef();
  const emailInputChangeHandler = (e) => {
    emailRef = e.target.value;
  };

  let passwordRef = useRef();
  const passwordInputChangeHandler = (e) => {
    passwordRef = e.target.value;
  };

  const [nameAlert, setNameAlert] = useState("");
  const onNameBlurHandler = () => {
    if (nameRef.split("").length < 2) {
      setNameAlert("alert");
    } else {
      setNameAlert("");
    }
  };

  const [emailAlert, setEmailAlert] = useState("");
  const onEmailBlurHandler = () => {
    if (!emailRef.split("")?.includes("@")) {
      setEmailAlert("alert");
    } else {
      setEmailAlert("");
    }
  };

  const [passwordAlert, setPasswordAlert] = useState("");
  const onPasswordBlurHandler = () => {
    if (passwordRef.split("").length < 8) {
      setPasswordAlert("alert");
    } else {
      setPasswordAlert("");
    }
  };

  const [isCheckedAlert, setIsCheckedAlert] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const onCheckedInputChange = (e) => {
    if (!e.checked) {
      setIsCheckedAlert("alert");
      setIsChecked(false);
    } else {
      setIsCheckedAlert("");
      setIsChecked(true);
    }
  };

  const onSubmit = () => {
    if(!isChecked){
    console.log('not checked')
    setIsCheckedAlert('alert')
    }
  };

  return (
    <div>
      <div>Sign Up</div>
      <form className="sign" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          placeholder="Ghazale Niazi"
          ref={nameRef}
          onChange={nameInputChangeHandler}
          onBlur={onNameBlurHandler}
          className={nameAlert}
        />
        <label>Email</label>
        <input
          placeholder="example@mail.com"
          onChange={emailInputChangeHandler}
          onBlur={onEmailBlurHandler}
          className={emailAlert}
        />

        <label>Password</label>
        <input
          placeholder="at least 8 characters"
          onChange={passwordInputChangeHandler}
          onBlur={onPasswordBlurHandler}
          className={passwordAlert}
        />

        <div className="terms">
          <input
            type="checkbox"
            className={`checkbox ${isCheckedAlert}`}
            onChange={onCheckedInputChange}
          />
          <label>
            I agree with <span>Terms </span>and<span> Privacy</span>
          </label>
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      <div className="changeMethod">
        <p>Already have an account?</p>

        <a className="login" onClick={props.onChangeMethod}>
          Log in
        </a>
      </div>
    </div>
  );
}

export default SignUpForm;
