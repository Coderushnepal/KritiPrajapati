import React from "react";
import "./styles/AvatarImg.scss";

function AvatarImg({ avatar, name }) {
  return <img className="avatarImg" width="50" src={avatar} alt={name}></img>;
}

export default AvatarImg;