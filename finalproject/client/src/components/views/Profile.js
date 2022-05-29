import { Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import ProfileEdit from "./ProfileEdit";
import PostContent from "../common/PostContent";
import { fetchUserProfile } from "../../actions/users";

import "./styles/Profile.scss";

function Profile() {
  const { profileId } = useParams();

  const dispatch = useDispatch();
  const { loading, profile, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUserProfile(profileId));
  }, [dispatch, profileId]);

  const isMyProfile = user.id === +profileId;
  if (loading) return <div>Loading ...</div>;

  const myDonations = profile.donations;
  const myPosts = profile.organizedPost;
  return (
    <div className="container profile-container clearfix">
      <div className="main scrollbar-hidden">
        <div className="userdetail-container">
          <div className="top-background"></div>
          <img
            className="userImg"
            src={profile.avatar}
            alt={profile.fullname}
          />
          <div className="userName">{profile.fullName}</div>
          <div className="emailphone">
            <span className="email">
              <FiMail className="icon" />
              {profile.email}
            </span>
            <span className="phone">
              <FiPhone className="icon" />
              {profile.phoneNumber}
            </span>
          </div>
          {/* <div className="joinedAt">{profile.joinedAt}</div> */}
          <div className="amount">Rs. {profile.amount}</div>
          {isMyProfile && <ProfileEdit profile={profile} />}
        </div>
        <div className="activities-container">
          <h2 className="title">Activities</h2>
          <div className="donation-container">
            <h3 className="title">Donations ({myDonations?.length})</h3>
            <div className="scroller scrollbar-hidden">
              {myDonations?.length > 0 ? (
                myDonations.map((donation) => (
                  <div className="activity" key={donation.id}>
                    <div className="donation-info">
                      <span className="name">{profile.fullName}</span> donated
                      Rs. {donation.amount} on{" "}
                      <span className="post">
                        <Link to={`/post/${donation.postId}`}>
                          {donation.postTitle}
                        </Link>
                      </span>
                    </div>
                    <div className="donation-message">
                      " {donation.message} "
                    </div>
                  </div>
                ))
              ) : (
                <div>No donations.</div>
              )}
            </div>
          </div>
          <div className="organized-container">
            <h3 className="title">Posts ({myPosts?.length})</h3>
            <div className="scroller scrollbar-hidden">
              {myPosts?.length > 0 ? (
                myPosts.map((post) => (
                  <div key={post.id} className="postContainer">
                    <PostContent post={post} userId={profile.id} />
                  </div>
                ))
              ) : (
                <div>No Post organized.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sideInfo ">
        <div className="info-container">
          <div>
            <h3>Total donation made</h3>
            <span className="info-number">{myDonations?.length}</span>
          </div>
          <div>
            <h3>Total organized posts</h3>
            <span className="info-number">{myPosts?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;