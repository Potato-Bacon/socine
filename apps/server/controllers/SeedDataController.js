require("dotenv").config();
const express = require("express");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
const countries = require("../objectIDs/countries");
const mbti = require("../objectIDs/mbti");
const interests = require("../objectIDs/interests");
const User = require("../models/userSchema");
const userListingTags = require("../objectIDs/userListingTags");
const towns = require("../objectIDs/towns");
const mrts = require("../objectIDs/mrts");
const users = require("../objectIDs/users");
const UserListing = require("../models/userListingSchema");

// const Country = require("../models/countrySchema");
// const Interest = require("../models/interestSchema");
// const Mbti = require("../models/mbtiSchema");
// const Amenities = require("../models/amenitiesSchema");
// const ListRoomTag = require("../models/listRoomTagSchema");
// const UserListingTag = require("../models/userListingTagSchema");
// const Town = require("../models/townSchema");
// const Mrt = require("../models/mrtSchema");

const random = (array) => {
  return Math.floor(Math.random() * array.length);
};

// router.get("/", (req, res) => {
//   res.status(200).send({ msg: "seed route" });
// });

// router.get("/user", async (req, res) => {
//   // const countryIndex = Math.floor(Math.random() * countries.length);
//   // const mbtiIndex = Math.floor(Math.random() * mbti.length);
//   // const interestIndex = Math.floor(Math.random() * interests.length);

//   const newUser = [
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//     {
//       username: faker.internet.userName(),
//       password: bcrypt.hashSync("Abc12345678!", 10),
//       email: faker.internet.email(),
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
//       country: countries[Math.floor(Math.random() * countries.length)],
//       profilePicture: faker.image.people(500, 500),
//       mbti: mbti[Math.floor(Math.random() * mbti.length)],
//       interest: [
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//         interests[[Math.floor(Math.random() * interests.length)]],
//       ],
//       updatedProfile: true,
//       getEmail: true,
//     },
//   ];

//   await User.deleteMany();

//   User.create(newUser, (error, users) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(users);
//     }
//   });
// });

// const uniqueUser = (count) => {
//   return count++;
// };
// router.get("/userlisting", async (req, res) => {
//   let count = 1;
//   const newUserListings = [
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//     {
//       findRoom: true,
//       occupation: faker.name.jobTitle(),
//       preferredTown: [towns[random(towns)], towns[random(towns)]],
//       preferredMrts: [mrts[random(mrts)], mrts[random(mrts)]],
//       budget: faker.datatype.number({ min: 500, max: 4000, precision: 100 }),
//       earlyMoveInDate: faker.date.between(
//         "2022-10-14T00:00:00.000Z",
//         "2022-12-01T00:00:00.000Z"
//       ),
//       userListingTag: [
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//         userListingTags[random(userListingTags)],
//       ],
//       submittedBy: users[count++],
//       active: true,
//     },
//   ];
//   await UserListing.deleteMany();

//   UserListing.create(newUserListings, (error, listings) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(listings);
//     }
//   });
// });

router.get("/roomlisting", async (req, res) => {
  const roomListings = [
    {
      title: "Windy and Spacious One-bedroom Studio Apartment",
      description:
        "Spacious apartment in the hearts of east side, near to amenities and friendly housemates. Contact me now!",
      address: "147 Tampines Avenue 5",
      town: "",
    },
  ];

  await RoomListing.deleteMany();

  RoomListing.create(roomListings, (error, listings) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(listings);
    }
  });
  res.status(200).send({ msg: "user seed route" });
});

// router.get("/country", async (req, res) => {
//   const newCountries = [
//     {
//       countryName: "Afghanistan",
//       countryCode: "AF",
//       nationality: "Afghan",
//     },
//     {
//       countryName: "Albania",
//       countryCode: "AL",
//       nationality: "Albanian",
//     },
//     {
//       countryName: "Algeria",
//       countryCode: "DZ",
//       nationality: "Algerian",
//     },
//     {
//       countryName: "American Samoa",
//       countryCode: "AS",
//       nationality: "Samoan",
//     },
//     {
//       countryName: "Andorra",
//       countryCode: "AD",
//       nationality: "Andorran",
//     },
//     {
//       countryName: "Angola",
//       countryCode: "AO",
//       nationality: "Angolan",
//     },
//     {
//       countryName: "Argentina",
//       countryCode: "AR",
//       nationality: "Argentinian",
//     },
//     {
//       countryName: "Armenia",
//       countryCode: "AM",
//       nationality: "Armenian",
//     },
//     {
//       countryName: "Australia",
//       countryCode: "AU",
//       nationality: "Australian",
//     },
//     {
//       countryName: "Austria",
//       countryCode: "AT",
//       nationality: "Austrian",
//     },
//     {
//       countryName: "Azerbaijan",
//       countryCode: "AZ",
//       nationality: "Azerbaijani",
//     },
//     {
//       countryName: "Bahamas",
//       countryCode: "BS",
//       nationality: "Bahamian",
//     },
//     {
//       countryName: "Bahrain",
//       countryCode: "BH",
//       nationality: "Bahraini",
//     },
//     {
//       countryName: "Bangladesh",
//       countryCode: "BD",
//       nationality: "Bangladeshi",
//     },
//     {
//       countryName: "Barbados",
//       countryCode: "BB",
//       nationality: "Barbadian",
//     },
//     {
//       countryName: "Belarus",
//       countryCode: "BY",
//       nationality: "Belarusian",
//     },
//     {
//       countryName: "Belgium",
//       countryCode: "BE",
//       nationality: "Belgian",
//     },
//     {
//       countryName: "Belize",
//       countryCode: "BZ",
//       nationality: "Belizean",
//     },
//     {
//       countryName: "Benin",
//       countryCode: "BJ",
//       nationality: "Beninese",
//     },
//     {
//       countryName: "Bermuda",
//       countryCode: "BM",
//       nationality: "Bermudian",
//     },
//     {
//       countryName: "Bhutan",
//       countryCode: "BT",
//       nationality: "Bhutanese",
//     },
//     {
//       countryName: "Bolivia",
//       countryCode: "BO",
//       nationality: "Bolivian",
//     },
//     {
//       countryName: "Bosnia And Herzegovina",
//       countryCode: "BA",
//       nationality: "Bosnian",
//     },
//     {
//       countryName: "Botswana",
//       countryCode: "BW",
//       nationality: "Botswanan",
//     },
//     {
//       countryName: "Brazil",
//       countryCode: "BR",
//       nationality: "Brazilian",
//     },
//     {
//       countryName: "Bulgaria",
//       countryCode: "BG",
//       nationality: "Bulgarian",
//     },
//     {
//       countryName: "Burkina Faso",
//       countryCode: "BF",
//       nationality: "Burkinese",
//     },
//     {
//       countryName: "Burundi",
//       countryCode: "BI",
//       nationality: "Burundian",
//     },
//     {
//       countryName: "Cambodia",
//       countryCode: "KH",
//       nationality: "Cambodian",
//     },
//     {
//       countryName: "Cameroon",
//       countryCode: "CM",
//       nationality: "Cameroonian",
//     },
//     {
//       countryName: "Canada",
//       countryCode: "CA",
//       nationality: "Canadian",
//     },
//     {
//       countryName: "Cape Verde Islands",
//       countryCode: "CV",
//       nationality: "Cape Verdean",
//     },
//     {
//       countryName: "Chad",
//       countryCode: "TD",
//       nationality: "Chadian",
//     },
//     {
//       countryName: "Chile",
//       countryCode: "CL",
//       nationality: "Chilean",
//     },
//     {
//       countryName: "China",
//       countryCode: "CN",
//       nationality: "Chinese",
//     },
//     {
//       countryName: "Colombia",
//       countryCode: "CO",
//       nationality: "Colombian",
//     },
//     {
//       countryName: "Congo",
//       countryCode: "CG",
//       nationality: "Congolese",
//     },
//     {
//       countryName: "Costa Rica",
//       countryCode: "CR",
//       nationality: "Costa Rican",
//     },
//     {
//       countryName: "Croatia",
//       countryCode: "HR",
//       nationality: "Croat",
//     },
//     {
//       countryName: "Cuba",
//       countryCode: "CU",
//       nationality: "Cuban",
//     },
//     {
//       countryName: "Cyprus",
//       countryCode: "CY",
//       nationality: "Cypriot",
//     },
//     {
//       countryName: "Czech Republic",
//       countryCode: "CZ",
//       nationality: "Czech",
//     },
//     {
//       countryName: "Denmark",
//       countryCode: "DK",
//       nationality: "Danish",
//     },
//     {
//       countryName: "Djibouti",
//       countryCode: "DJ",
//       nationality: "Djiboutian",
//     },
//     {
//       countryName: "Dominica",
//       countryCode: "DM",
//       nationality: "Dominican",
//     },
//     {
//       countryName: "Dominican Republic",
//       countryCode: "DO",
//       nationality: "Dominican",
//     },
//     {
//       countryName: "Ecuador",
//       countryCode: "EC",
//       nationality: "Ecuadorean",
//     },
//     {
//       countryName: "Egypt",
//       countryCode: "EG",
//       nationality: "Egyptian",
//     },
//     {
//       countryName: "El Salvador",
//       countryCode: "SV",
//       nationality: "Salvadorean",
//     },
//     {
//       countryName: "Eritrea",
//       countryCode: "ER",
//       nationality: "Eritrean",
//     },
//     {
//       countryName: "Estonia",
//       countryCode: "EE",
//       nationality: "Estonian",
//     },
//     {
//       countryName: "Ethiopia",
//       countryCode: "ET",
//       nationality: "Ethiopian",
//     },
//     {
//       countryName: "Fiji",
//       countryCode: "FJ",
//       nationality: "Fijian",
//     },
//     {
//       countryName: "Finland",
//       countryCode: "FI",
//       nationality: "Finnish",
//     },
//     {
//       countryName: "France",
//       countryCode: "FR",
//       nationality: "French",
//     },
//     {
//       countryName: "French Polynesia",
//       countryCode: "PF",
//       nationality: "Polynesian",
//     },
//     {
//       countryName: "Gabon",
//       countryCode: "GA",
//       nationality: "Gabonese",
//     },
//     {
//       countryName: "Gambia",
//       countryCode: "GM",
//       nationality: "Gambian",
//     },
//     {
//       countryName: "Georgia",
//       countryCode: "GE",
//       nationality: "Georgian",
//     },
//     {
//       countryName: "Germany",
//       countryCode: "DE",
//       nationality: "German",
//     },
//     {
//       countryName: "Ghana",
//       countryCode: "GH",
//       nationality: "Ghanaian",
//     },
//     {
//       countryName: "Greece",
//       countryCode: "GR",
//       nationality: "Greek",
//     },
//     {
//       countryName: "Grenada",
//       countryCode: "GD",
//       nationality: "Grenadian",
//     },
//     {
//       countryName: "Guatemala",
//       countryCode: "GT",
//       nationality: "Guatemalan",
//     },
//     {
//       countryName: "Guinea",
//       countryCode: "GN",
//       nationality: "Guinean",
//     },
//     {
//       countryName: "Guyana",
//       countryCode: "GY",
//       nationality: "Guyanese",
//     },
//     {
//       countryName: "Haiti",
//       countryCode: "HT",
//       nationality: "Haitian",
//     },
//     {
//       countryName: "Honduras",
//       countryCode: "HN",
//       nationality: "Honduran",
//     },
//     {
//       countryName: "Hungary",
//       countryCode: "HU",
//       nationality: "Hungarian",
//     },
//     {
//       countryName: "Iceland",
//       countryCode: "IS",
//       nationality: "Icelandic",
//     },
//     {
//       countryName: "India",
//       countryCode: "IN",
//       nationality: "Indian",
//     },
//     {
//       countryName: "Indonesia",
//       countryCode: "ID",
//       nationality: "Indonesian",
//     },
//     {
//       countryName: "Iran",
//       countryCode: "IR",
//       nationality: "Iranian",
//     },
//     {
//       countryName: "Iraq",
//       countryCode: "IQ",
//       nationality: "Iraqi",
//     },
//     {
//       countryName: "Ireland",
//       countryCode: "IE",
//       nationality: "Ireland",
//     },
//     {
//       countryName: "Israel",
//       countryCode: "IL",
//       nationality: "Israeli",
//     },
//     {
//       countryName: "Italy",
//       countryCode: "IT",
//       nationality: "Italian",
//     },
//     {
//       countryName: "Jamaica",
//       countryCode: "JM",
//       nationality: "Jamaican",
//     },
//     {
//       countryName: "Japan",
//       countryCode: "JP",
//       nationality: "Japanese",
//     },
//     {
//       countryName: "Jordan",
//       countryCode: "JO",
//       nationality: "Jordanian",
//     },
//     {
//       countryName: "Kazakhstan",
//       countryCode: "KZ",
//       nationality: "Kazakh",
//     },
//     {
//       countryName: "Kenya",
//       countryCode: "KE",
//       nationality: "Kenyan",
//     },
//     {
//       countryName: "Korea",
//       countryCode: "KR",
//       nationality: "South Korean",
//     },
//     {
//       countryName: "Korea",
//       countryCode: "KP",
//       nationality: "North Korean",
//     },
//     {
//       countryName: "Kuwait",
//       countryCode: "KW",
//       nationality: "Kuwaiti",
//     },
//     {
//       countryName: "Latvia",
//       countryCode: "LV",
//       nationality: "Latvian",
//     },
//     {
//       countryName: "Lebanon",
//       countryCode: "LB",
//       nationality: "Lebanese",
//     },
//     {
//       countryName: "Liberia",
//       countryCode: "LR",
//       nationality: "Liberian",
//     },
//     {
//       countryName: "Libya",
//       countryCode: "LY",
//       nationality: "Libyan",
//     },
//     {
//       countryName: "Lithuania",
//       countryCode: "LT",
//       nationality: "Lithuanian",
//     },
//     {
//       countryName: "Luxembourg",
//       countryCode: "LU",
//       nationality: "LUXEMBOURG",
//     },
//     {
//       countryName: "Madagascar",
//       countryCode: "MG",
//       nationality: "Madagascan",
//     },
//     {
//       countryName: "Malawi",
//       countryCode: "MW",
//       nationality: "Malawian",
//     },
//     {
//       countryName: "Malaysia",
//       countryCode: "MY",
//       nationality: "Malaysian",
//     },
//     {
//       countryName: "Maldives",
//       countryCode: "MV",
//       nationality: "Maldivian",
//     },
//     {
//       countryName: "Mali",
//       countryCode: "ML",
//       nationality: "Malian",
//     },
//     {
//       countryName: "Malta",
//       countryCode: "MT",
//       nationality: "Maltese",
//     },
//     {
//       countryName: "Mauritania",
//       countryCode: "MR",
//       nationality: "Mauritanian",
//     },
//     {
//       countryName: "Mauritius",
//       countryCode: "MU",
//       nationality: "Mauritian",
//     },
//     {
//       countryName: "Mexico",
//       countryCode: "MX",
//       nationality: "Mexican",
//     },
//     {
//       countryName: "Monaco",
//       countryCode: "MC",
//       nationality: "Monacan",
//     },
//     {
//       countryName: "Mongolia",
//       countryCode: "MN",
//       nationality: "Mongolian",
//     },
//     {
//       countryName: "Montenegro",
//       countryCode: "ME",
//       nationality: "Montenegrin",
//     },
//     {
//       countryName: "Morocco",
//       countryCode: "MA",
//       nationality: "Moroccan",
//     },
//     {
//       countryName: "Mozambique",
//       countryCode: "MZ",
//       nationality: "Mozambican",
//     },
//     {
//       countryName: "Namibia",
//       countryCode: "NA",
//       nationality: "Namibian",
//     },
//     {
//       countryName: "Nepal",
//       countryCode: "NP",
//       nationality: "Nepalese",
//     },
//     {
//       countryName: "Netherlands",
//       countryCode: "NL",
//       nationality: "Dutch",
//     },
//     {
//       countryName: "New Zealand",
//       countryCode: "NZ",
//       nationality: "New Zealand",
//     },
//     {
//       countryName: "Nicaragua",
//       countryCode: "NI",
//       nationality: "Nicaraguan",
//     },
//     {
//       countryName: "Niger",
//       countryCode: "NE",
//       nationality: "Nigerien",
//     },
//     {
//       countryName: "Nigeria",
//       countryCode: "NG",
//       nationality: "Nigerian",
//     },
//     {
//       countryName: "Norway",
//       countryCode: "NO",
//       nationality: "Norwegian",
//     },
//     {
//       countryName: "Oman",
//       countryCode: "OM",
//       nationality: "Omani",
//     },
//     {
//       countryName: "Pakistan",
//       countryCode: "PK",
//       nationality: "Pakistani",
//     },
//     {
//       countryName: "Panama",
//       countryCode: "PA",
//       nationality: "Panamanian",
//     },
//     {
//       countryName: "Papua New Guinea",
//       countryCode: "PG",
//       nationality: "Guinean",
//     },
//     {
//       countryName: "Paraguay",
//       countryCode: "PY",
//       nationality: "Paraguayan",
//     },
//     {
//       countryName: "Peru",
//       countryCode: "PE",
//       nationality: "Peruvian",
//     },
//     {
//       countryName: "Philippines",
//       countryCode: "PH",
//       nationality: "Philippine",
//     },
//     {
//       countryName: "Poland",
//       countryCode: "PL",
//       nationality: "Polish",
//     },
//     {
//       countryName: "Portugal",
//       countryCode: "PT",
//       nationality: "Portuguese",
//     },
//     {
//       countryName: "Qatar",
//       countryCode: "QA",
//       nationality: "Qatari",
//     },
//     {
//       countryName: "Romania",
//       countryCode: "RO",
//       nationality: "Romanian",
//     },
//     {
//       countryName: "Rwanda",
//       countryCode: "RW",
//       nationality: "Rwandan",
//     },
//     {
//       countryName: "Saudi Arabia",
//       countryCode: "SA",
//       nationality: "Saudi Arabian",
//     },
//     {
//       countryName: "Senegal",
//       countryCode: "SN",
//       nationality: "Senegalese",
//     },
//     {
//       countryName: "Serbia",
//       countryCode: "RS",
//       nationality: "Serb or Serbian",
//     },
//     {
//       countryName: "Sierra Leone",
//       countryCode: "SL",
//       nationality: "Sierra Leonian",
//     },
//     {
//       countryName: "Singapore",
//       countryCode: "SG",
//       nationality: "Singaporean",
//     },
//     {
//       countryName: "Slovakia",
//       countryCode: "SK",
//       nationality: "Slovak",
//     },
//     {
//       countryName: "Slovenia",
//       countryCode: "SI",
//       nationality: "Slovenian",
//     },
//     {
//       countryName: "Solomon Islands",
//       countryCode: "SB",
//       nationality: "Slomoni",
//     },
//     {
//       countryName: "Somalia",
//       countryCode: "SO",
//       nationality: "Somali",
//     },
//     {
//       countryName: "South Africa",
//       countryCode: "ZA",
//       nationality: "South African",
//     },
//     {
//       countryName: "Spain",
//       countryCode: "ES",
//       nationality: "Spanish",
//     },
//     {
//       countryName: "Sri Lanka",
//       countryCode: "LK",
//       nationality: "Sri Lankan",
//     },
//     {
//       countryName: "Sudan",
//       countryCode: "SD",
//       nationality: "Sudanese",
//     },
//     {
//       countryName: "Suriname",
//       countryCode: "SR",
//       nationality: "Surinamese",
//     },
//     {
//       countryName: "Swaziland",
//       countryCode: "SZ",
//       nationality: "Swazi",
//     },
//     {
//       countryName: "Sweden",
//       countryCode: "SE",
//       nationality: "Swedish",
//     },
//     {
//       countryName: "Switzerland",
//       countryCode: "CH",
//       nationality: "Swiss",
//     },
//     {
//       countryName: "Taiwan",
//       countryCode: "TW",
//       nationality: "Taiwanese",
//     },
//     {
//       countryName: "Tajikistan",
//       countryCode: "TJ",
//       nationality: "Tajik",
//     },
//     {
//       countryName: "Thailand",
//       countryCode: "TH",
//       nationality: "Thai",
//     },
//     {
//       countryName: "Togo",
//       countryCode: "TG",
//       nationality: "Togolese",
//     },
//     {
//       countryName: "Trinidad And Tobago",
//       countryCode: "TT",
//       nationality: "Trinidadian",
//     },
//     {
//       countryName: "Tunisia",
//       countryCode: "TN",
//       nationality: "Tunisian",
//     },
//     {
//       countryName: "Turkey",
//       countryCode: "TR",
//       nationality: "Turkish",
//     },
//     {
//       countryName: "Turkmenistan",
//       countryCode: "TM",
//       nationality: "Turkoman",
//     },
//     {
//       countryName: "Tuvalu",
//       countryCode: "TV",
//       nationality: "Tuvaluan",
//     },
//     {
//       countryName: "Uganda",
//       countryCode: "UG",
//       nationality: "Ugandan",
//     },
//     {
//       countryName: "Ukraine",
//       countryCode: "UA",
//       nationality: "Ukrainian",
//     },
//     {
//       countryName: "United Arab Emirates",
//       countryCode: "AE",
//       nationality: "Emirati",
//     },
//     {
//       countryName: "United Kingdom",
//       countryCode: "GB",
//       nationality: "British",
//     },
//     {
//       countryName: "United States",
//       countryCode: "US",
//       nationality: "American",
//     },
//     {
//       countryName: "Uruguay",
//       countryCode: "UY",
//       nationality: "Uruguayan",
//     },
//     {
//       countryName: "Uzbekistan",
//       countryCode: "UZ",
//       nationality: "Uzbek",
//     },
//     {
//       countryName: "Vanuatu",
//       countryCode: "VU",
//       nationality: "Vanuatuan",
//     },
//     {
//       countryName: "Venezuela",
//       countryCode: "VE",
//       nationality: "Venezuelan",
//     },
//     {
//       countryName: "Vietnam",
//       countryCode: "VN",
//       nationality: "Vietnamese",
//     },
//     {
//       countryName: "Yemen",
//       countryCode: "YE",
//       nationality: "Yemeni",
//     },
//     {
//       countryName: "Zambia",
//       countryCode: "ZM",
//       nationality: "Zambian",
//     },
//   ];

//   await Country.deleteMany();

//   Country.create(newCountries, (error, countries) => {
//     if (error) {
//       res.status(500).send({ msg: error });
//     } else {
//       res.status(201).send(countries);
//     }
//   });
// });

// router.get("/interest", async (req, res) => {
//   const newInterest = [
//     {
//       category: "sports",
//       interests: "Basketball",
//     },
//     {
//       category: "sports",
//       interests: "Badminton",
//     },
//     {
//       category: "sports",
//       interests: "Swimming",
//     },
//     {
//       category: "sports",
//       interests: "Cycling",
//     },
//     {
//       category: "sports",
//       interests: "Running",
//     },
//     {
//       category: "sports",
//       interests: "Tennis",
//     },
//     {
//       category: "sports",
//       interests: "Table Tennis",
//     },
//     {
//       category: "sports",
//       interests: "Yoga",
//     },
//     {
//       category: "sports",
//       interests: "Scuba Diving",
//     },
//     {
//       category: "sports",
//       interests: "Hiking",
//     },
//     {
//       category: "sports",
//       interests: "Baseball",
//     },
//     {
//       category: "sports",
//       interests: "Bowling",
//     },
//     {
//       category: "sports",
//       interests: "Archery",
//     },
//     {
//       category: "movies",
//       interests: "Action",
//     },
//     {
//       category: "movies",
//       interests: "Comedy",
//     },
//     {
//       category: "movies",
//       interests: "Documentaries",
//     },
//     {
//       category: "movies",
//       interests: "Drama",
//     },
//     {
//       category: "movies",
//       interests: "Fantasy",
//     },
//     {
//       category: "movies",
//       interests: "Horror",
//     },
//     {
//       category: "movies",
//       interests: "Mystery",
//     },
//     {
//       category: "movies",
//       interests: "Romance",
//     },
//     {
//       category: "movies",
//       interests: "Thriller",
//     },
//     {
//       category: "movies",
//       interests: "Western",
//     },
//     {
//       category: "games",
//       interests: "Sandbox",
//     },
//     {
//       category: "games",
//       interests: "Real-time strategy (RTS)",
//     },
//     {
//       category: "games",
//       interests: "Shooters (FPS and TPS)",
//     },
//     {
//       category: "games",
//       interests: "Multiplayer online battle arena",
//     },
//     {
//       category: "games",
//       interests: "Role-playing",
//     },
//     {
//       category: "games",
//       interests: "Simulation and sports",
//     },
//     {
//       category: "games",
//       interests: "Puzzlers and party games",
//     },
//     {
//       category: "games",
//       interests: "Action-adventure",
//     },
//     {
//       category: "games",
//       interests: "Survival and horror",
//     },
//     {
//       category: "games",
//       interests: "Platformer",
//     },
//     {
//       category: "games",
//       interests: "Mystery",
//     },
//     {
//       category: "activity",
//       interests: "Shopping",
//     },
//     {
//       category: "activity",
//       interests: "Traveling",
//     },
//     {
//       category: "activity",
//       interests: "Cooking",
//     },
//     {
//       category: "activity",
//       interests: "Gaming",
//     },
//     {
//       category: "activity",
//       interests: "Painting",
//     },
//     {
//       category: "activity",
//       interests: "Dancing",
//     },
//     {
//       category: "activity",
//       interests: "Singing",
//     },
//     {
//       category: "activity",
//       interests: "Reading",
//     },
//     {
//       category: "music",
//       interests: "Pop",
//     },
//     {
//       category: "music",
//       interests: "EDM",
//     },
//     {
//       category: "music",
//       interests: "Rock",
//     },
//     {
//       category: "music",
//       interests: "Jazz",
//     },
//     {
//       category: "music",
//       interests: "Techno",
//     },
//     {
//       category: "music",
//       interests: "Country",
//     },
//     {
//       category: "music",
//       interests: "Mando-pop",
//     },
//     {
//       category: "music",
//       interests: "K-pop",
//     },
//     {
//       category: "music",
//       interests: "Hip-Hop",
//     },
//   ];

//   await Interest.deleteMany();

//   Interest.create(newInterest, (error, interests) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(interests);
//     }
//   });
// });

// router.get("/mbti", async (req, res) => {
//   const newMbti = [
//     {
//       mbti: "INTJ",
//       description: "Architect",
//     },
//     {
//       mbti: "INTP",
//       description: "Logician",
//     },
//     {
//       mbti: "ENTJ",
//       description: "Commander",
//     },
//     {
//       mbti: "ENTP",
//       description: "Debator",
//     },
//     {
//       mbti: "INFJ",
//       description: "Advocate",
//     },
//     {
//       mbti: "INFP",
//       description: "Mediator",
//     },
//     {
//       mbti: "ENFJ",
//       description: "Protagonist",
//     },
//     {
//       mbti: "ENFP",
//       description: "Campaigner",
//     },
//     {
//       mbti: "ISTJ",
//       description: "Logistician",
//     },
//     {
//       mbti: "ISFJ",
//       description: "Defender",
//     },
//     {
//       mbti: "ESTJ",
//       description: "Executive",
//     },
//     {
//       mbti: "ESFJ",
//       description: "Consul",
//     },
//     {
//       mbti: "ISTP",
//       description: "Virtuoso",
//     },
//     {
//       mbti: "ISFP",
//       description: "Adventurer",
//     },
//     {
//       mbti: "ESTP",
//       description: "Entrepreneur",
//     },
//     {
//       mbti: "ESFP",
//       description: "Entertainer",
//     },
//   ];
//   await Mbti.deleteMany();

//   Mbti.create(newMbti, (error, mbti) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(mbti);
//     }
//   });
// });

// router.get("/amenities", async (req, res) => {
//   const newAmenities = [
//     {
//       amenities: "Wifi",
//     },
//     {
//       amenities: "Washing Machine only",
//     },
//     {
//       amenities: "Washing Machine + Dryer",
//     },
//     {
//       amenities: "Utilities Included",
//     },
//     {
//       amenities: "Air conditioner",
//     },
//     {
//       amenities: "Fully Furnished",
//     },
//     {
//       amenities: "Partially Furnished",
//     },
//     {
//       amenities: "Cat Friendly",
//     },
//     {
//       amenities: "Dog Friendly",
//     },
//     {
//       amenities: "Smoking Allowed",
//     },
//     {
//       amenities: "Access to Condo Facilities",
//     },
//     {
//       amenities: "Parking",
//     },
//     {
//       amenities: "Electrical Hob",
//     },
//     {
//       amenities: "Gas Hob",
//     },
//     {
//       amenities: "Water Heater",
//     },
//     {
//       amenities: "Near to MRT",
//     },
//     {
//       amenities: "Near to Food Courts",
//     },
//     {
//       amenities: "Near to Shopping Mall",
//     },
//     {
//       amenities: "Near to Schools",
//     },
//   ];
//   await Amenities.deleteMany();

//   Amenities.create(newAmenities, (error, amenities) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(amenities);
//     }
//   });
// });

// router.get("/listroomtag", async (req, res) => {
//   const newListRoomTag = [
//     {
//       tag: "Diversity Friendly",
//     },
//     {
//       tag: "Cat Friendly",
//     },
//     {
//       tag: "Dog Friendly",
//     },
//     {
//       tag: "Children Friendly",
//     },
//     {
//       tag: "Student Friendly",
//     },
//     {
//       tag: "Light Cooking allowed",
//     },
//     {
//       tag: "LGBT Friendly",
//     },
//   ];
//   await ListRoomTag.deleteMany();

//   ListRoomTag.create(newListRoomTag, (error, tags) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(tags);
//     }
//   });
// });

// router.get("/userlistingtag", async (req, res) => {
//   const newUserListingTag = [
//     {
//       tag: "Non-Smoker",
//     },
//     { tag: "I have a cat" },
//     { tag: "I have a dog" },
//     { tag: "I'm a student" },
//     { tag: "LGBT+ Friendly" },
//     { tag: "Diversity Friendly" },
//   ];
//   await UserListingTag.deleteMany();

//   UserListingTag.create(newUserListingTag, (error, tags) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(tags);
//     }
//   });
// });

// router.get("/town", async (req, res) => {
//   const newTown = [
//     {
//       location: "Sembawang",
//       region: "North",
//     },
//     {
//       location: "Woodlands",
//       region: "North",
//     },
//     {
//       location: "Yishun",
//       region: "North",
//     },
//     {
//       location: "Ang Mo Kio",
//       region: "North-East",
//     },
//     {
//       location: "Hougang",
//       region: "North-East",
//     },
//     {
//       location: "Punggol",
//       region: "North-East",
//     },
//     {
//       location: "Sengkang",
//       region: "North-East",
//     },
//     {
//       location: "Serangoon",
//       region: "North-East",
//     },
//     {
//       location: "Bedok",
//       region: "East",
//     },
//     {
//       location: "Pasir Ris",
//       region: "East",
//     },
//     {
//       location: "Tampines",
//       region: "East",
//     },
//     {
//       location: "Bukit Batok",
//       region: "West",
//     },
//     {
//       location: "Bukit Pangang",
//       region: "West",
//     },
//     {
//       location: "Choa Chu Kang",
//       region: "West",
//     },
//     {
//       location: "Clementi",
//       region: "West",
//     },
//     {
//       location: "Jurong East",
//       region: "West",
//     },
//     {
//       location: "Jurong West",
//       region: "West",
//     },
//     {
//       location: "Tengah",
//       region: "West",
//     },
//     {
//       location: "Bishan",
//       region: "Central",
//     },
//     {
//       location: "Bukit Merah",
//       region: "Central",
//     },
//     {
//       location: "Bukit Timah",
//       region: "Central",
//     },
//     {
//       location: "Central Area",
//       region: "Central",
//     },
//     {
//       location: "Geylang",
//       region: "Central",
//     },
//     {
//       location: "Kallang",
//       region: "Central",
//     },
//     {
//       location: "Whampoa",
//       region: "Central",
//     },
//     {
//       location: "Marine Parade",
//       region: "Central",
//     },
//     {
//       location: "Queenstown",
//       region: "Central",
//     },
//     {
//       location: "Toa Payoh",
//       region: "Central",
//     },
//   ];
//   await Town.deleteMany();

//   Town.create(newTown, (error, towns) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(towns);
//     }
//   });
// });

// router.get("/mrt", async (req, res) => {
//   const newMRT = [
//     {
//       station: "Aljunied",
//     },
//     {
//       station: "Ang Mo Kio",
//     },
//     {
//       station: "Bartley",
//     },
//     {
//       station: "Bayfront",
//     },
//     {
//       station: "Beauty World",
//     },
//     {
//       station: "Bedok",
//     },
//     {
//       station: "Bedok North",
//     },
//     {
//       station: "Bedok Reservoir",
//     },
//     {
//       station: "Bencoolen",
//     },
//     {
//       station: "Bendemeer",
//     },
//     {
//       station: "Bishan",
//     },
//     {
//       station: "Boon Keng",
//     },
//     {
//       station: "Boon Lay",
//     },
//     {
//       station: "Botanic Gardens",
//     },
//     {
//       station: "Braddell",
//     },
//     {
//       station: "Bras Basah",
//     },
//     {
//       station: "Buangkok",
//     },
//     {
//       station: "Bugis",
//     },
//     {
//       station: "Bukit Batok",
//     },
//     {
//       station: "Bukit Gombak",
//     },
//     {
//       station: "Bukit Panjang",
//     },
//     {
//       station: "Buona Vista",
//     },
//     {
//       station: "Caldecott",
//     },
//     {
//       station: "Canberra",
//     },
//     {
//       station: "Cashew",
//     },
//     {
//       station: "Changi Airport",
//     },
//     {
//       station: "Chinatown",
//     },
//     {
//       station: "Chinese Garden",
//     },
//     {
//       station: "Choa Chu Kang",
//     },
//     {
//       station: "City Hall",
//     },
//     {
//       station: "Clarke Quay",
//     },
//     {
//       station: "Clementi",
//     },
//     {
//       station: "Commonwealth",
//     },
//     {
//       station: "Dakota",
//     },
//     {
//       station: "Dhoby Ghaut",
//     },
//     {
//       station: "Dover",
//     },
//     {
//       station: "Downtown",
//     },
//     {
//       station: "Esplanade",
//     },
//     {
//       station: "Eunos",
//     },
//     {
//       station: "Expo",
//     },
//     {
//       station: "Farrer Park",
//     },
//     {
//       station: "Farrer Road",
//     },
//     {
//       station: "Fort Canning",
//     },
//     {
//       station: "Geylang Bahru",
//     },
//     {
//       station: "Gul Circle",
//     },
//     {
//       station: "HarbourFront",
//     },
//     {
//       station: "Haw Par Villa",
//     },
//     {
//       station: "Hillview",
//     },
//     {
//       station: "Holland Village",
//     },
//     {
//       station: "Hougang",
//     },
//     {
//       station: "Jalan Besar",
//     },
//     {
//       station: "Joo Koon",
//     },
//     {
//       station: "Jurong East",
//     },
//     {
//       station: "Kaki Bukit",
//     },
//     {
//       station: "Kallang",
//     },
//     {
//       station: "Kembangan",
//     },
//     {
//       station: "Kent Ridge",
//     },
//     {
//       station: "Khatib",
//     },
//     {
//       station: "King Albert Park",
//     },
//     {
//       station: "Kovan",
//     },
//     {
//       station: "Kranji",
//     },
//     {
//       station: "Labrador Park",
//     },
//     {
//       station: "Lakeside",
//     },
//     {
//       station: "Lavender",
//     },
//     {
//       station: "Little India",
//     },
//     {
//       station: "Lorong Chuan",
//     },
//     {
//       station: "MacPherson",
//     },
//     {
//       station: "Marina Bay",
//     },
//     {
//       station: "Marina South Pier",
//     },
//     {
//       station: "Marsiling",
//     },
//     {
//       station: "Marymount",
//     },
//     {
//       station: "Mattar",
//     },
//     {
//       station: "Mountbatten",
//     },
//     {
//       station: "Newton",
//     },
//     {
//       station: "Nicoll Highway",
//     },
//     {
//       station: "Novena",
//     },
//     {
//       station: "one-north",
//     },
//     {
//       station: "Orchard",
//     },
//     {
//       station: "Outram Park",
//     },
//     {
//       station: "Pasir Panjang",
//     },
//     {
//       station: "Pasir Ris",
//     },
//     {
//       station: "Paya Lebar",
//     },
//     {
//       station: "Pioneer",
//     },
//     {
//       station: "Potong Pasir",
//     },
//     {
//       station: "Promenade",
//     },
//     {
//       station: "Punggol",
//     },
//     {
//       station: "Queenstown",
//     },
//     {
//       station: "Raffles Place",
//     },
//     {
//       station: "Redhill",
//     },
//     {
//       station: "Rochor",
//     },
//     {
//       station: "Sembawang",
//     },
//     {
//       station: "Sengkang",
//     },
//     {
//       station: "Serangoon",
//     },
//     {
//       station: "Simei",
//     },
//     {
//       station: "Sixth Avenue",
//     },
//     {
//       station: "Somerset",
//     },
//     {
//       station: "Stadium",
//     },
//     {
//       station: "Stevens",
//     },
//     {
//       station: "Tai Seng",
//     },
//     {
//       station: "Tampines",
//     },
//     {
//       station: "Tampines East",
//     },
//     {
//       station: "Tampines West",
//     },
//     {
//       station: "Tan Kah Kee",
//     },
//     {
//       station: "Tanah Merah",
//     },
//     {
//       station: "Tanjong Pagar",
//     },
//     {
//       station: "Telok Ayer",
//     },
//     {
//       station: "Telok Blangah",
//     },
//     {
//       station: "Tiong Bahru",
//     },
//     {
//       station: "Toa Payoh",
//     },
//     {
//       station: "Tuas Crescent",
//     },
//     {
//       station: "Tuas Link",
//     },
//     {
//       station: "Tuas West Road",
//     },
//     {
//       station: "Ubi",
//     },
//     {
//       station: "Upper Changi",
//     },
//     {
//       station: "Woodlands",
//     },
//     {
//       station: "Woodlands North",
//     },
//     {
//       station: "Woodlands South",
//     },
//     {
//       station: "Woodleigh",
//     },
//     {
//       station: "Yew Tee",
//     },
//     {
//       station: "Yio Chu Kang",
//     },
//     {
//       station: "Yishun",
//     },
//   ];

//   await Mrt.deleteMany();

//   Mrt.create(newMRT, (error, mrts) => {
//     if (error) {
//       res.status(500).send({ error });
//     } else {
//       res.status(201).send(mrts);
//     }
//   });
// });

module.exports = router;
