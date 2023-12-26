import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Card({ title, image, description, details }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top" alt="images" />

        <div className="card-body">
          <h5 className="card-title">
            <b>{title}</b>
          </h5>

          <p className="card-text">
            {" "}
            <b>Must Visit :</b>
            {description}
          </p>
          <a href="#" className="btn btn-primary" onClick={handleShow}>
            View Details
          </a>
        </div>
      </div>

      {/* Open the Model to see the details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} className="card-img-top" alt="images" />
          <p>{details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
