import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceStrict } from "date-fns";

import AvatarImg from "./AvatarImg";
import DonatePost from "../views/DonatePost";

import "./styles/DonarsMessages.scss";

function DonarsMessages({ post, postId, selfPost, donarsDetail }) {
  let hasDonations = Boolean(donarsDetail?.length);
  return (
    <div className="donarMessages-container">
      <h2 className="supports_title">
        Supports ({donarsDetail?.length || "0"})
      </h2>
      <div className="donars_list">
        {hasDonations ? (
          donarsDetail?.map((detail) => (
            <div className="donarMessage-container ">
              <div className="clearfix">
                <div className="avatar_div">
                  <AvatarImg avatar={detail.donarAvatar} name={detail.name} />
                </div>

                <div className="donationDetail_div">
                  <Link to={`/profile/${detail.donarId}`}>
                    <h4 className="name">{detail.name} </h4>
                  </Link>
                  <div className="clearfix">
                    <div className="amount">Rs. {detail.amount}</div>
                    <p className="donatedTime">
                      {formatDistanceStrict(
                        new Date(detail.donatedAt),
                        new Date(),
                        { addSuffix: true }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="message">{detail.message}</div>
            </div>
          ))
        ) : (
          <div className="no-support-text">No supports yet...</div>
        )}
      </div>
      {!selfPost && (
        <div className="clearfix support_info">
          {post && (
            <>
              <span className="support_text">
                Please donate to share your words of encouragement.{" "}
              </span>
              <span className="support_button">
                <DonatePost postId={postId} post={post} />
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default DonarsMessages;