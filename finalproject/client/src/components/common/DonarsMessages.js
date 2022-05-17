import React from "react";
import DonatePost from "../views/DonatePost";
import AvatarImg from "./AvatarImg";
 
import "./styles/DonarMessages.scss";
 
function DonarsMessages({ post, postId, donarsDetail }) {
 let hasDonations = Boolean(donarsDetail?.length);
 return (
   <div className="donarMessages-container">
     <h2 className="supports_title">
       Supports ({donarsDetail?.length || "0"})
     </h2>
     <div className="donars_list">
       {hasDonations ? (
         donarsDetail?.map((detail) => (
           <div className="donarMessage-container clearfix">
             <div className="avatar_div">
               <AvatarImg avatar={detail.donarAvatar} name={detail.name} />
             </div>
             <div className="donationDetail_div">
               <h4 className="name">{detail.name}</h4>
               <div className="amount">Rs. {detail.amount}</div>
               <div className="message">{detail.message}</div>
             </div>
           </div>
         ))
       ) : (
         <div className="no-support-text">No supports yet...</div>
       )}
     </div>
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
   </div>
 );
}
 
export default DonarsMessages;