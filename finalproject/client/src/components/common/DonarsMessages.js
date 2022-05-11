import React from "react";
import DonatePost from "../views/DonatePost";
import DonarMessage from "./DonarMessage";

function DonarsMessages({ post, donarsDetail }) {
  let hasDonations = Boolean(donarsDetail?.length);
  return (
    <div>
      <h2>Supports ({donarsDetail?.length || "0"})</h2>
      <div>
        {hasDonations ? (
          donarsDetail?.map((detail) => <DonarMessage detail={detail} />)
        ) : (
          <div>No supports yet...</div>
        )}
      </div>
      <div>
        Please donate to share your words of encouragement.{" "}
        <DonatePost postId={post.id} post={post} />
      </div>
    </div>
  );
}

export default DonarsMessages;