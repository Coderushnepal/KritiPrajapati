import { FiEdit2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { updateProfile } from "../../actions/users";
import {
  lengthValidator,
  regexValidator,
  requiredValidator,
} from "../../utils/validators";

import "./styles/ProfileEdit.scss";

function ProfileEdit({ profile }) {
  const dispatch = useDispatch();
  const [showAvatarEdit, setShowAvatarEdit] = useState(false);
  const avatarURL = "https://avatars.dicebear.com/api/avataaars/";
  const [isOpen, setIsOpen] = useState(false);

  const [seed, setSeed] = useState("");
  const [profileData, setProfileData] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    let isAllFormDataValid = true;
    let tempErrors = {};

    if (!requiredValidator(profileData.fullName)) {
      tempErrors.fullName = "FullName is required";
      isAllFormDataValid = false;
    }
    if (!requiredValidator(profileData.phoneNumber)) {
      tempErrors.phoneNumber = "Phone number is required";
      isAllFormDataValid = false;
    } else if (!lengthValidator(profileData.phoneNumber, 9, 11)) {
      tempErrors.phoneNumber = "Phone number length must be 10.";
      isAllFormDataValid = false;
    }
    if (!requiredValidator(seed)) {
      tempErrors.seed = "avatar Seed is required";
      isAllFormDataValid = false;
    } else if (!regexValidator(seed, /^[a-z0-9]+$/)) {
      tempErrors.seed = "Seed must only contain alphabet or number";
      isAllFormDataValid = false;
    }
    setErrors(tempErrors);

    if (isAllFormDataValid) {
      dispatch(
        updateProfile({
          ...profileData,
          avatar: avatarURL + seed + ".svg",
        })
      );
      handleClose();
    }
  };

  useEffect(() => {
    if (profile.fullName) {
      setProfileData({
        fullName: profile.fullName,
        phoneNumber: profile.phoneNumber,
      });
      setSeed(profile.avatar.split("/")[5].split(".")[0]);
    }
  }, [profile]);

  const handleShowEdit = () => {
    setShowAvatarEdit(true);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
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
        <div className="profileEdit-container">
          <h1 className="title">Edit Profile</h1>
          <form onSubmit={onSubmit}>
            <div className="profileImg_container" onClick={handleShowEdit}>
              <div className="profileImg_div">
                <img
                  className="profileImg"
                  key={seed}
                  src={`${avatarURL}${seed}.svg`}
                  alt="profile"
                />
                {!showAvatarEdit && (
                  <div className="editPP_div">
                    <FiEdit2 className="editIcon" />
                  </div>
                )}
              </div>
              {showAvatarEdit && (
                <div className="changeAvatar_div">
                  <label>
                    <div className="bold avatar-label">Avatar seed:</div>
                    <span className="small-label">
                      Enter anything to change your Profile Image
                    </span>
                  </label>
                  <InputField
                    name="seed"
                    inputClass="changeAvatar_input"
                    placeholder="Enter your fullname"
                    handleOnChange={(e) => setSeed(e.target.value)}
                    value={seed}
                    errors={errors}
                  />
                </div>
              )}
            </div>

            <div>
              <InputField
                label="Full Name"
                name="fullName"
                labelClass={"bold"}
                placeholder="Enter your fullname"
                handleOnChange={onChangeHandler}
                value={profileData.fullName}
                errors={errors}
              />
            </div>
            <div>
              <InputField
                label="Phone Number"
                name="phoneNumber"
                labelClass={"bold"}
                placeholder="Enter your phone number"
                handleOnChange={onChangeHandler}
                value={profileData.phoneNumber}
                errors={errors}
              />
            </div>
            <div>
              <Button>Edit</Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ProfileEdit;