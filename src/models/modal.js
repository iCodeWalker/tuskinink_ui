import React, { useState } from "react";
import "./modal.css";

const Modal = ({ title, content, buttonTitle, buttonFunc }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    setShowModal(!showModal);
    console.log(e.target);
    e.stopPropagation();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  console.log(showModal);

  return (
    <div
      onClick={() => setShowModal(false)}
      className={`${showModal ? "model-open" : ""} `}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <button className="modal-button" onClick={toggleModal}>
        Open Modal
      </button>
      <div className={`${showModal ? "overlay" : ""}`}></div>
      <div
        className={`modal ${showModal ? "modal-show" : "modal-hide"}`}
        onClick={handleModalClick}
      >
        <div className="modal-content">
          <div>
            <p style={{ fontSize: 24, fontWeight: 600 }}>You have open modal</p>
          </div>

          <p style={{ color: "whitesmoke" }}>
            I found an old question that mentioned it's not possible using HTML
            and CSS, but hopefully, there's a solution now.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: 10,
                margin: 10,
                marginLeft: 0,
                width: "15%",
                backgroundColor: "#12C0CF",
                outline: "none",
                border: "1px solid #C5F6FA",
                borderRadius: "10px",
                color: "white",
                fontSize: "1.5vw",
                fontWeight: 600,
                boxShadow: "1px 1px 2px 2px #E2FAFC50",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: 10,
                margin: 10,
                marginLeft: 5,
                width: "15%",
                backgroundColor: "#12C0CF",
                outline: "none",
                border: "1px solid #C5F6FA",
                borderRadius: "10px",
                color: "white",
                fontSize: "1.5vw",
                fontWeight: 600,
                boxShadow: "1px 1px 2px 2px #E2FAFC50",
                cursor: "pointer",
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
