import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Img from "react-cool-img";

//API
const featuredUserListingURL = `/api/userhome/featureduserlisting`;
const featuredRoomListingURL = `/api/userhome/featuredroomlisting`;

function FeaturedListingsUserHome() {
    const navigate = useNavigate();
    const [featuredUserListing, setFeaturedUserListing] = useState([]);
    const [featuredRoomListing, setFeaturedRoomListing] = useState([]);

    useEffect(() => {
        fetch featuredUserListingURL
    })
    return (
        <>
            <h1>Featured Listings @ User Home</h1>
        </>
    )
}

export default FeaturedListingsUserHome;
