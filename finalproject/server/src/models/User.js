import getUserDonationsQuery from "../db/queries/getUserDonationsQuery.js";
import getUserOrganizedPostQuery from "../db/queries/getUserOrganizedPostQuery.js";
import DBModel from "./DBModel.js";
 
/**
* Model for the 'users' table.
*
* @class User
*/
class User extends DBModel {
 constructor() {
   super("users");
 }
 
 async getUserDonations(userId) {
   const details = await this.query(getUserDonationsQuery, { userId });
   console.log(details, "details");
   return details || [];
 }
 async getUserOrganizedPost(userId) {
   const organizedPost = await this.query(getUserOrganizedPostQuery, {
     userId,
   });
   return organizedPost || [];
 }
}
 
export default User;