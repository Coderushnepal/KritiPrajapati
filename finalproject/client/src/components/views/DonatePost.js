import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { donatePost } from "../../actions/posts";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function DonatePost({ postId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  const dispatch = useDispatch();
  const [data, setData] = useState({
    amount: 0,
    message: "",
    postId: postId,
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      
       dispatch(donatePost(data));
      closeModal();
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div>
      <div>
        <button onClick={openModal}>Donate</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={onSubmit}>
          <button onClick={closeModal}>x</button>
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            id="amount"
            placeholder="Enter your Amount"
            onChange={onChangeHandler}
            value={data.amount}
          />

          <label htmlFor="message">Message</label>
          <input
            name="message"
            id="message"
            placeholder="Enter your Message"
            onChange={onChangeHandler}
            value={data.message}
          />
          <button>Donate</button>
        </form>
      </Modal>
    </div>
  );
}

export default DonatePost;
