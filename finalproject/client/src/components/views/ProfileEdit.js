import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import Modal from "../common/Modal";
import InputField from "../common/InputField";
import { useDispatch } from "react-redux";

function ProfileEdit({ profile }) {
  const dispatch = useDispatch();
  console.log(profile, "profile");
  const onSubmit = () => {};
  const [isOpen, setIsOpen] = useState(false);

  const [seed, setSeed] = useState(123);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);

  const onChangeHandler = (e) => {};
  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="editProfile" onClick={handleShow}>
        <FiEdit2 className="icon" />
      </div>
      <Modal show={isOpen} handleClose={handleClose}>
        <h1 className="title">Edit Profile</h1>
        <form onSubmit={onSubmit}>
          <div>
            <img
              key={seed}
              src={`https://avatars.dicebear.com/api/big-smile/${seed}.svg`}
              alt="profile"
            />
            <input onChange={(e) => setSeed(e.target.value)} value={seed} />
          </div>
          <div>
            <InputField
              label="Full Name"
              name="fullname"
              placeholder="Enter your fullname"
              handleOnChange={onChangeHandler}
              value={profileData.fullName}
            />
          </div>
          <div>
            <InputField
              label="Phone Number"
              name="phone number"
              placeholder="Enter your phone number"
              handleOnChange={onChangeHandler}
              value={profileData.phoneNumber}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ProfileEdit;
