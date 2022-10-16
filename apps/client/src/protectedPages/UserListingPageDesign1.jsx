// import { useEffect, useState } from "react";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// import Img from "react-cool-img";
// import SearchBarUserListing from "../protectedComponents/SearchBarUserListing";

// // API
// const userListingURL = "/api/userlistings";
// // const userAuthURL = "/api/auth";

// function UserListingPageDesign1({ userName, token }) {
//   const navigate = useNavigate();
//   const [userListing, setUserListing] = useState([]);
//   // const [searchUser, setSearchUser] = useState([]);
//   // const [searchInput, setSearchInput] = useState("");

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
//       {/* Header starts here */}
//       <div>
//         <section className="bg-white dark:bg-gray-900">
//           {/* Header Starts here */}
//           <div className="my-8 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
//             <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//               You are <span className="border-b-8 border-red-600">not</span>{" "}
//               <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
//                 alone.
//               </mark>{" "}
//               <br />
//               Lets connect.
//             </h1>
//           </div>
//           {/*  End of header */}
//           {/* Search Bar and Filter components */}
//           <div>
//             <SearchBarUserListing
//               setUserListing={setUserListing}
//               userListing={userListing}
//             />
//           </div>
//           {/* End of Search Bar and Filter components */}

//           {/* Start of grid */}
//           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//               {userListing.map((usl) => (
//                 <div key={usl?._id}>
//                   <div className="text-white relative text-lg font-semibold bg-blue-700 pl-2 rounded-md shadow-xl py-2">
//                     <h1>
//                       <span className="font-bold">Meet. </span>
//                       {usl?.name}
//                     </h1>
//                     <h1 className="text-xs mb-2">{usl?.occupation}</h1>
//                     <h1 className="text-xs">
//                       <span className="font-semibold">Budget. </span>$
//                       {usl?.budget}
//                     </h1>
//                     <h1 className="text-xs mb-2">
//                       <span className="font-semibold ">Proximity. </span>
//                       {usl?.town}
//                     </h1>
//                   </div>
//                   <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//                     <Img
//                       className="object-cover w-full h-56 md:h-64 xl:h-80"
//                       src={usl?.profilePicture}
//                       alt="Person"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//                       <p className="mb-1 text-lg font-bold text-gray-100">
//                         {usl?.name}
//                       </p>
//                       <p className="mb-4 text-xs text-gray-100">
//                         {usl?.occupation}
//                       </p>
//                       <p className="text-xs tracking-wide text-gray-400">
//                         Preferred Location
//                       </p>
//                       <p className="mb-4 text-xs text-gray-100">{usl?.town}</p>
//                       <p className="text-xs tracking-wide text-gray-400">
//                         MRT Station Proximity
//                       </p>
//                       <p className="mb-4 text-xs text-gray-100">{usl?.mrt}</p>
//                       <p className="text-xs tracking-wide text-gray-400">
//                         Overall Budget
//                       </p>
//                       <p className="mb-4 text-xs text-gray-100">
//                         SGD ${usl?.budget}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* grid ends here */}
//         </section>
//       </div>
//     </>
//   );
// }

// export default UserListingPageDesign1;
