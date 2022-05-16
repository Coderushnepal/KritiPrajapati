import React, { useState } from "react";

import Button from "./Button";
import AvatarImg from "./AvatarImg";
import UpdatesModal from "./Modals/UpdatesModal/UpdatesModal";

import "./styles/PostUpdates.scss";

function PostUpdates({ userId, postId, postOwnerId, updatesDetail }) {
  let isOwner = userId === postOwnerId;
  let hasUpdates = Boolean(updatesDetail?.length);
  const [isOpen, setIsOpen] = useState(false);
  

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="postUpdates-container">
      <h2 className="title">
      </h2>
      <div className="updates_list">
        {hasUpdates ? (
          updatesDetail?.map((detail) => (
            <div className="postUpdate-container clearfix">
              <div className="avatar_div">
                <AvatarImg avatar={detail.donarAvatar} name={detail.name} />
              </div>
              <div className="donationDetail_div">
                <h4 className="name">{detail.name}</h4>
                <div className="message">{detail.message}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-updates-text">No Updates yet...</div>
        )}
      </div>
      {isOwner && (
        <div className="updates_info_text clearfix">
          <span className="updates_text">
            You have not published any updates to your supporters. Please share
            your updates about the post.
          </span>

          <div className="updates_button">
            <Button onClick={handleShow}>Add Updates</Button>
          </div>

         <UpdatesModal handleClose ={handleClose} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}

export default PostUpdates;