/* eslint-disable react/prop-types */
import LoginForm from "../components/LoginForm";
import NavPublic from "../components/NavPublic";

function LoginPage({ setUsername, setToken }) {
  return (
    <>
      <NavPublic />
      <LoginForm setUsername={setUsername} setToken={setToken} />
    </>
  );
}

export default LoginPage;
