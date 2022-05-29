import Boom from "@hapi/boom";
 
import User from "../models/User.js";
import logger from "../utils/logger.js";
import { hash, compare, createToken } from "../utils/crypt.js";
 
/**
* Create a new user.
*
* @param {Object} params
* @return {Object}
*/
export async function createUser(params) {
 const { fullName, email, password, phoneNumber } = params;
 
 const existingUser = await new User().findByParams({ email });
 const existingPhoneNumber = await new User().findByParams({ phoneNumber });
 
 if (existingUser) {
   logger.error("The email address is already taken.");
 
   throw new Boom.badRequest("The email address is already taken.");
 }
 if (existingPhoneNumber) {
   logger.error("The phone number is already used.");
 
   throw new Boom.badRequest("The phone number is already used.");
 }
 
 const hashedPassword = hash(password);
 const avatar = `https://avatars.dicebear.com/api/avataaars/${phoneNumber}.svg`;
 const [insertedData] = await new User().save({
   fullName,
   email,
   password: hashedPassword,
   phoneNumber,
   avatar,
 });
 
 return {
   data: insertedData,
   message: "Added user successfully",
 };
}
 
/**
* Login validation and token generation.
*
* @param {Object} params
* @return {Object}
*/
export async function login(params) {
 const { email, password } = params;
 
 const existingUser = await new User().findByParams({ email });
 
 if (!existingUser) {
   logger.error("Invalid credentials: Could not find the associated email");
 
   throw new Boom.badRequest("Invalid credentials");
 }
 
 const doesPasswordMatch = compare(password, existingUser.password);
 
 if (!doesPasswordMatch) {
   logger.error("Invalid credentials: Password does not match");
 
   throw new Boom.badRequest("Invalid credentials");
 }
 
 const user = {
   id: existingUser.id,
   name: existingUser.name,
   email: existingUser.email,
 };
 
 const token = createToken(user);
 
 return {
   data: { token, user },
   message: "Logged in succesfully",
 };
}
 
/**
* Get list of users
*
* @return {Object}
*/
export async function getAllUsers() {
 logger.info("Fetching list of users");
 
 const data = await new User().getAll();
 
 return {
   data,
   message: "List of users",
 };
}
 
/**
* Get user details.
*
* @return {Object}
*/
export async function getUserDetails(user) {
 logger.info("Fetching user details");
 
 const userId = user.id;
 
 const data = await new User().getById(userId);
 
 return {
   data,
   message: "user detail",
 };
}
 
/**
* Get profile details by id.
*
* @return {Object}
*/
export async function getProfileDetail(userId) {
 logger.info("Fetching user profile details");
 
 const userDetail = await new User().getById(userId);
 logger.error(userDetail, "userDetail");
 const donations = await new User().getUserDonations(userId);
 const organizedPost = await new User().getUserOrganizedPost(userId);
 
 const data = {
   ...userDetail,
   donations: donations,
   organizedPost: organizedPost,
 };
 return {
   data,
   message: "user profile detail",
 };
}

/**
* update user details.
*
* @return {Object}
*/
export async function updateUserDetails(user, body) {
  logger.info("Updating user details");

  const userId = user.id;

  const data = await new User().updateById(userId, body);

  return {
    data,
    message: "update user detail",
  };
}
