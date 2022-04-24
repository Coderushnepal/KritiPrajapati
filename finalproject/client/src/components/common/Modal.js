import React from "react";

import "./styles/modal.scss";

function Modal({ show, handleClose, children }) {
  if (!show) return null;
  return (
    <div className="modal-container-overlay">
      <div className="content-wrapper ">
        <div className="closeBtn" onClick={handleClose}>
          x
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;