import Update from "../models/Update.js";
import logger from "../utils/logger.js";
 
/**
* Create a new donation.
*
* @param {Object} params
* @return {Object}
*/
export async function createUpdate(params, user) {
 const { message, postId } = params;
 
 const [insertedData] = await new Update().save({
   post_owner_id: user.id,
   postId,
   message,
 });
 
 return {
   data: insertedData,
   message: "Added update on post successfully",
 };
}
 
/**
* Get list of users
*
* @return {Object}
*/
export async function getAllDonations() {
 logger.info("Fetching list of users");
 
 const data = await new Update().getAll();
 
 return {
   data,
   message: "List of users",
 };
}
