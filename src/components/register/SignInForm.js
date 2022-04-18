import React from "react";

function SignInForm(props) {
  return (
    <div>

      <div>Log in</div>
      <form className="sign" onSubmit={props.onChangeMethod} >
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input />
        <div className="terms">
          <input type="checkbox" className="checkbox" />
          <label> Remember me</label>
        </div>
        <button type="submit" className="button">
          Log in
        </button>
        <div>
          <a href="#" className="login">
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="changeMethod">
        <p>Dont't have an account?</p>
        <a  className="login" onClick={props.onChangeMethod}>
          Sign up
        </a>
      </div>
    </div>
  );
}

export default SignInForm;
