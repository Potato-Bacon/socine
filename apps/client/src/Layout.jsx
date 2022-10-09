import { Outlet } from "react-router-dom";
import NavBar from "./components/NavProtected";

const Layout = ({ setToken }) => {
  return (
    <>
      <NavBar setToken={setToken} />
      <Outlet />
    </>
  );
};

export default Layout;
