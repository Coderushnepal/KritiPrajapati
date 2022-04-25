import Boom from "@hapi/boom";

import Donation from "../models/Donate.js";
import User from "../models/User.js";
import Post from "../models/Post.js";
import logger from "../utils/logger.js";

/**
 * Create a new donation.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function createDonation(params, user) {
  const { message, amount, postId } = params;
  const userId = user.id;

  const donatingPost = await new Post().getById(postId);
  const donarUser = await new User().getById(userId);
  const ownerUser =  await new User().getById(donatingPost.ownerUserId);

  if (userId === ownerUser.id) {
    logger.error(
      `You cannot donate to your own post.`
    );

    throw new Boom.badRequest(
      `You cannot donate to your own post.`
    );
  }

  // check post status
  if (donatingPost.postStatus !== "active") {
    logger.error(
      `The post has already been ${donatingPost.postStatus}. You cannot donate to this post.`
    );

    throw new Boom.badRequest(
      `The post has already been ${donatingPost.postStatus}. You cannot donate to this post.`
    );
  }

  const amount_num = Number(amount);
  const donarAmount = Number(donarUser.amount);
  const ownerAmount = Number(ownerUser.amount);
  // check if user has sufficient amount.
  if (amount_num > donarAmount) {
    logger.error(`You don't have enough money.`);

    throw new Boom.badRequest(`You don't have enough money.`);
  }

  await new Post().updateById(postId, {
    collectedAmount: Number(donatingPost.collectedAmount) + amount_num,
  });
  // doner_user ko amount banauna lageko

  await new User().updateById(donatingPost.ownerUserId, {
    amount: ownerAmount + amount_num,
  });


  // user amount
  await new User().updateById(userId, { amount: donarAmount - amount_num });

  const [insertedData] = await new Donation().save({
    postId,
    amount,
    message,
    donarUserId: userId,
  });

  return {
    data: insertedData,
    message: "Added donation successfully",
  };
}

/**
 * Get list of users
 *
 * @return {Object}
 */
export async function getAllDonations() {
  logger.info("Fetching list of users");

  const data = await new Donation().getAll();

  return {
    data,
    message: "List of users",
  };
}
