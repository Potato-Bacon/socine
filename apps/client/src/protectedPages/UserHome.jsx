/* eslint-disable react/prop-types */
import { useState } from "react";
import FeaturedListingsUserHome from "../protectedComponents/FeaturedListingsUserHome";

function UserHome({ userName, token }) {
  const [featuredUserList, setFeaturedUserList] = useState([]);
  const [featuredRoomList, setFeaturedRoomList] = useState([]);
  return (
    <>
      <FeaturedListingsUserHome
        featuredUserList={featuredUserList}
        setFeaturedUserList={setFeaturedUserList}
        featuredRoomList={featuredRoomList}
        setFeaturedRoomList={setFeaturedRoomList}
      />
    </>
  );
}

export default UserHome;
