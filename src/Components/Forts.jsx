import React from "react";
import "./Css/Forts.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Forts({ title, image, description, details }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="fort" onClick={handleShow}>
        <div class="container">
          <div class="box">
            <span></span>
            <div class="content">
              <img src={image} class="card-img-top" alt="images" />
              <h2>{title}</h2>
              <b>
                <p className="desc">{description}</p>
              </b>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Modals  */}
      <Modal className="model" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb">
          <img src={image} className="card-img-top" alt="images" />
          <p className="details">{details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
