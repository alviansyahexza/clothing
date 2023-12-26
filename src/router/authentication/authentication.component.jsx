import SignUpComponent from "../../component/sign-up/sign-up.component";
import SignInForm from "../../component/sign-in/sign-in.component";
import "./authentication.styles.scss";

const AuthenticationComponent = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpComponent />
    </div>
  );
};

export default AuthenticationComponent;
