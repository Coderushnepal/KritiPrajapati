import React, { useState } from "react";
import Modal from 'react-modal';
import { signupUser } from "../../actions/users";

import { useDispatch } from "react-redux";

const customStyles = {
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
      dispatch(signupUser(data))

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <span>Don't have an account?</span>
      <div>
        <button onClick={openModal}>Sign up</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={onSubmit}>
            <button onClick={closeModal}>x</button>
          <h1></h1>
          <label htmlFor="fullName">Full name</label>
          <input
            placeholder="Enter your Name"
            name="fullName"
            id="fullName"
            value={data.fullName}
            onChange={onChangeHandler}
          />

          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your Email"
            name="email"
            id="email"
            value={data.email}
            onChange={onChangeHandler}
          />

          <label htmlFor="phoneNumber">phone Number</label>
          <input
            placeholder="Enter your phone Number"
            name="phoneNumber"
            id="phoneNumber"
            value={data.phoneNumber}
            onChange={onChangeHandler}
          />

          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your Password"
            name="password"
            id="password"
            value={data.password}
            onChange={onChangeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default SignUp;
