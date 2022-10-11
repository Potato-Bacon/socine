import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavProtected from "../components/NavProtected";

function UserHome({ userName, token }) {
  console.log({ userName });
  console.log({ token });
  return (
    <>
      <NavProtected />
      <h1>User HomePage</h1>
    </>
  );
}

export default UserHome;
