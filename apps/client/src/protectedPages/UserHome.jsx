import { useEffect } from "react";

function UserHome({ userName, token }) {
  const userURL = "/api/auth";

  useEffect(() => {
    fetch(userURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [userName, token]);
  return (
    <>
      <h1>User HomePage</h1>
    </>
  );
}

export default UserHome;
