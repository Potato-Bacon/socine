import { Outlet } from "react-router-dom";
import NavProtected from "./protectedComponents/NavProtected";

const Layout = ({ setToken }) => {
  return (
    <>
      <NavProtected />
      <Outlet />
    </>
  );
};

export default Layout;
