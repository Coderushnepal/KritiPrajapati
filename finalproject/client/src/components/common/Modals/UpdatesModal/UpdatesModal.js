import React from "react";
const dispatch = useDispatch();

function UpdatesModal({isOpen, handleClose}) {
    const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(postUpdate({ message: message, postId: postId }));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="updates-modal-container">
      <Modal show={isOpen} handleClose={handleClose}>
        <h1 className="title">Updates</h1>
        <p className="description">
          Your updates will ensure your supporter and helps them know about your
          endevours and hardwork.
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor="message" className="label">
            <b>Update Message</b>
          </label>
          <textarea
            name="message"
            placeholder="Enter your updates"
            onChange={onChangeHandler}
            value={message}
            cols="10"
          />
          <Button>Send</Button>
        </form>
      </Modal>
    </div>
  );
}

export default UpdatesModal;