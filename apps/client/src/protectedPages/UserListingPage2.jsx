// import { useEffect, useState } from "react";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// import Img from "react-cool-img";
// import SearchBarUserListing from "../protectedComponents/SearchBarUserListing";

// // API
// const userListingURL = "/api/userlistings";
// // const userAuthURL = "/api/auth";

// function UserListingPage2({ userName, token }) {
//   const navigate = useNavigate();
//   const [userListing, setUserListing] = useState([]);
//   const [searchUser, setSearchUser] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   // Fetch User Listing
//   useEffect(() => {
//     fetch(userListingURL, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUserListing(data));
//   }, []);

//   return (
//     <>
//       <div>
//         <section className="bg-white dark:bg-gray-900">
//           <div className="container px-6 py-10 mx-auto">
//             <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
//               Get connected with Socine Members
//             </h1>

//             <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
//               Here embarks your journey to connect with other Socine members
//             </p>
//           </div>
//           <div>
//             <SearchBarUserListing
//               setUserListing={setUserListing}
//               userListing={userListing}
//             />
//           </div>
//           <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
//             {/* Data Mapping Starts Here */}
//             {userListing.map((usl) => (
//               <>
//                 <Link to={`/user/userlisting/${usl._id}`}>
//                   <div className="flex justify-center" key={usl._id}>
//                     <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
//                       <Img
//                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                         src={usl?.profilePicture}
//                         alt="profilePicture"
//                         loading="lazy"
//                       />

//                       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                         {usl?.name}
//                       </h1>

//                       <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                         {usl?.occupation}
//                       </p>
//                       <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 text-xs">
//                         Prefered Location: {usl?.town}
//                       </p>
//                       <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 text-xs">
//                         Budget: ${usl?.budget}
//                       </p>

//                       <div className="flex mt-3 -mx-2"></div>
//                     </div>
//                   </div>
//                 </Link>
//               </>
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default UserListingPage2;
