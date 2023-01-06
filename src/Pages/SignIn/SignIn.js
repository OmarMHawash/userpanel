import SignInComp from "../../Components/SignIn/SignInComp";

const SignIn = (props) => {
  const handleUserData = (data) => {
    props.userDataIn(data);
  };
  return (
    <div id="sign-in-page">
      <SignInComp userData={handleUserData} />
    </div>
  );
};

export default SignIn;

