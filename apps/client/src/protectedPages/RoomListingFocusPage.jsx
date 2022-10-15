import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { useParams } from "react-router-dom";

function RoomListingFocusPage({ userName, token }) {
  const [roomFocus, setRoomFocus] = useState();

  const { id } = useParams();
  const roomFocusURL = `/api/roomListings/${id}`;

  //fetch RoomFocus Data
  useEffect(() => {
    fetch(roomFocusURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRoomFocus(data));
  }, []);

  return (
    <>
      <h1>RoomListingFocusPage</h1>
    </>
  );
}

export default RoomListingFocusPage;
