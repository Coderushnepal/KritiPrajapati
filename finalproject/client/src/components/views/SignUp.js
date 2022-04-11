import React, { useState } from "react";
import Modal from 'react-modal';
import { signupUser } from "../../actions/users";

import { useDispatch } from "react-redux";

import './styles/SignUp.scss';
import InputField from "../common/InputField";
import Button from "../common/Button";

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function SignUp() {
  const dispatch= useDispatch();

    let subtitle;
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    function openModal() {
      setModalIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(signupUser(data));
      setData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
      closeModal();

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="SignUpContainer">
      <span className="signupText">Don't have an account?
      <span className="signUpBtn" onClick={openModal}>Sign up</span ></span>
       
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <button onClick={closeModal}>x</button>
        <h3>Sign up</h3>
        <p>Please fill the sign up form below to Signup to our system</p>
        <form onSubmit={onSubmit}>
          <InputField
          name="fullName"
          label="Full name"
          value={data.fullName}
          onChange={onChangeHandler}
          placeholder="Enter your Name"
          />

          <InputField
            placeholder="Enter your Email"
            name="email"
            label="Email"
            value={data.email}
            onChange={onChangeHandler}
          />
          <InputField
          label="Phone Number"
            placeholder="Enter your phone Number"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={onChangeHandler}
          />
          <InputField
            placeholder="Enter your Password"
            name="password"
            label="Password"
            type="password"
            id="password"
            value={data.password}
            onChange={onChangeHandler}
          />

          <Button type="submit" className="subitBtn">Submit</Button>
        </form>
      </Modal>
    </div>
  );
}

export default SignUp;
