import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function UserHome({ userName, token }) {
  console.log({ userName });
  console.log({ token });
  return (
    <>
      <h1>User HomePage</h1>
    </>
  );
}

export default UserHome;
