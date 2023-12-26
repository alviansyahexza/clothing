import { useState, useContext } from "react";
import { createUserByEmailPassword } from "../../utils/firebase/firebase.utils";
import { createUser } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";

const SignUpComponent = () => {
  const initValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signUpFormValue, setSignUpFormValue] = useState(initValue);

  const setValue = (event) => {
    const { name, value } = event.target;
    setSignUpFormValue({ ...signUpFormValue, [name]: value });
  };

  const resetForm = () => {
    setSignUpFormValue(initValue);
  };

  const register = async (event) => {
    event.preventDefault();
    if (signUpFormValue.password !== signUpFormValue.confirmPassword) return;
    const user = await createUserByEmailPassword(
      signUpFormValue.email,
      signUpFormValue.password
    );
    await createUser(user.user, signUpFormValue.displayName);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={register}>
        <h2>Dont have account</h2>
        <span>Signup with email and password</span>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={setValue}
          value={signUpFormValue.displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={setValue}
          value={signUpFormValue.email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={setValue}
          value={signUpFormValue.password}
          required
        />
        <FormInput
          label="Confir Password"
          type="password"
          name="confirmPassword"
          onChange={setValue}
          value={signUpFormValue.confirmPassword}
          required
        />
        <Button type="submit" buttonType="google">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpComponent;
