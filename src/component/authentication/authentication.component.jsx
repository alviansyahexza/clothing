import SignUpComponent from "../sign-up/sign-up.component";
import SignInForm from "../sign-in/sign-in.component";
import "../authentication/authentication.styles.scss";

const AuthenticationComponent = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpComponent />
    </div>
  );
};

export default AuthenticationComponent;
