import "./styles/modal.scss";
import ReactDOM from "react-dom";

function Modal({ show, handleClose, children }) {
  if (show)
    return ReactDOM.createPortal(
      <div className="modal-container-overlay">
        <div className="content-wrapper ">
          <div className="closeBtn" onClick={handleClose}>
            x
          </div>
          <div className="content">{children}</div>
        </div>
      </div>,
      document.getElementById("modal")
    );

  return null;
}

export default Modal;