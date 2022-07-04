import React from "react";
import { format } from "date-fns";

import AddPostUpdates from "../views/AddPostUpdates";

import "./styles/PostUpdates.scss";

function PostUpdates({ userId, postId, postOwnerId, updatesDetail }) {
  let isOwner = userId === postOwnerId;
  console.log(postOwnerId, userId, isOwner, "is WO");
  let hasUpdates = Boolean(updatesDetail?.length);

  return (
    <div className="postUpdates-container">
      <h2 className="title">
        Updates {hasUpdates && `( ${updatesDetail?.length} )`}
      </h2>
      <div className="updates_list">
        {hasUpdates ? (
          updatesDetail?.map((detail) => (
            <div className="postUpdate-container clearfix" key={detail.id}>
              <h4 className="name">{detail.name}</h4>
              <div className="updatedTime">
                {format(new Date(detail.updatedAt), "MMMM dd, yyyy")}
              </div>
              <div className="message">{detail.message}</div>
            </div>
          ))
        ) : (
          <div className="no-updates-text">No Updates yet...</div>
        )}
      </div>
      {isOwner && (
        <div className="updates_info_text clearfix">
          {hasUpdates ? (
            <span className="updates_text">
              If you want to add more updates about your post.
            </span>
          ) : (
            <span className="updates_text">
              You have not published any updates to your supporters. Please
              share your updates about the post.
            </span>
          )}
          <AddPostUpdates postId={postId} />
        </div>
      )}
    </div>
  );
}

export default PostUpdates;