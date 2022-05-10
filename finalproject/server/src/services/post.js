import Boom from "@hapi/boom";

import Post from "../models/Post.js";
import logger from "../utils/logger.js";
import User from "../models/User.js";

/**
 * Create a new post.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function createPost(params,user) {
  // console.log(params);

  const { postTitle, postDescription, targetAmount, category, endDate } = params;
  const ownerUserId = user.id;
  const ownerUser =  await new User().getById(ownerUserId);


  const [insertedData] = await new Post().save({
    postTitle, postDescription, ownerUserId,targetAmount, category, endDate,
  });

  return {
    data: {
      ...insertedData,
      avatar:  ownerUser.avatar,
      ownerName: ownerUser.fullName
    },
    message: "Added post successfully",
  };
}

/**
 * Get list of posts
 *
 * @param {Object} [query]
 * @return {Object}
 */
export async function getAllPosts() {

  // console.log(query)
  // const postTitle = query.postTitle;
  // const ownerUserId = query.ownerUserId;
  // const category = query.category;
  
  logger.info("Fetching list of posts");

  const data = await new Post().getAllPosts();
 

  return {
    data,
    message: "List of posts",
  };
}

/**
 * Get details of a post by the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
 export async function getPost(id) {
  logger.info(`Fetching post with postId ${id}`);

  const post = await new Post().getPostDetails(id);

  if (!post) {
    logger.error(`Cannot find post with postId ${id}`);

    throw new Boom.notFound(`Cannot find post with postId ${id}`);
  }

  const parsedPost = {
    ...post,
  };

  return {
    data: parsedPost,
    message: `Details of postId ${id}`
  };
}


/**
 * Remove an existing record based on the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
 export async function removePost(id) {
  logger.info(`Checking if post with id ${id} exists`);

  const post = await new Post().getById(id);

  if (!post) {
    logger.error(`Cannot delete post with id ${id} because it doesn't exist`);

    throw new Boom.notFound(`Cannot delete post with id ${id} because it doesn't exist`);
  }

  await new Post().removeById(id);

  return {
    message: 'Record removed successfully'
  };
}

/**
 * Update report_count of an existing record based on the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
 export async function reportPost(id) {
  logger.info(`Checking if post with id ${id} exists`);

  const post = await new Post().getById(id);

  if (!post) {
    logger.error(`Cannot delete post with id ${id} because it doesn't exist`);

    throw new Boom.notFound(
      `Cannot delete post with id ${id} because it doesn't exist`
    );
  }

  let tempReportCount = post.reportCount;
  let postStatus = post.postStatus;
  if (tempReportCount < 5) {
    tempReportCount++;
  } else {
    postStatus = "banned";
  }
  const [updatedData] = await new Post().updateById(id, {
    ...post,
    postStatus: postStatus,
    reportCount: tempReportCount,
  });

  return {
    data: updatedData,
    message: `Reported of post ${id}`,
  };
}


