import { Outlet } from "react-router-dom";
import NavProtected from "./components/NavProtected";

const Layout = ({ setToken }) => {
  return (
    <>
      <NavProtected setToken={setToken} />
      <Outlet />
    </>
  );
};

export default Layout;
