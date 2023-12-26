import FormInput from "../form-input/form-input.component";
import { useState, useContext } from "react";
import Button from "../button/button.component";
import {
  googleAuth,
  createUser,
  signinWithEmailAndPassword,
  googleSignInWithPopup,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import "./sign-in.styles.scss";

const SignInForm = () => {
  const signInWithEmail = (event) => {
    event.preventDefault();
    const res = async () => {
      const result = await signinWithEmailAndPassword(
        signinValue.email,
        signinValue.password
      );
    };
    res();
  };

  const initSignInValue = {
    email: "",
    password: "",
  };
  const [signinValue, setSignInValue] = useState(initSignInValue);

  const setValue = (event) => {
    const { name, value } = event.target;
    setSignInValue({ ...signinValue, [name]: value });
  };

  const loginGooglePopup = async () => {
    const auth = await googleSignInWithPopup();
    await createUser(auth.user);
  };

  useEffect(() => {
    const resFun = async () => {
      const res = await getRedirectResult(googleAuth);
      if (res) {
        createUser(res.user);
      }
    };
    resFun();
  }, []);

  return (
    <div className="sign-in-container">
      <form onSubmit={signInWithEmail}>
        <h2>Dont have account</h2>
        <span>Signup with email and password</span>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={setValue}
          value={signinValue.email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={setValue}
          value={signinValue.password}
          required
        />
        <div className="buttons-container">
          <Button>Sign In</Button>
          <Button onClick={loginGooglePopup} buttonType="google">
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
