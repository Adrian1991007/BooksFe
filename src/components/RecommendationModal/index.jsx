import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Heading } from "theme-ui";
import WebcamCapture from "../WebcamCapture";
import BooksToast from "../Toast";
import { useLocation } from "wouter";
import { BOOKS_PATH } from "../../common/constants";
import { detect } from "../../axios/detect";
import Storage from "store2";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center"
  }
};

const RecommendationModal = ({ isOpen, onClose }) => {
  const [location, setLocation] = useLocation();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [person, setPerson] = useState(null);

  const onDetectSuccess = (response) => {
    const person = response.length > 0 ? response[0] : null;
    if (person) {
      Storage.set("gender", person.gender);
      Storage.set("age", person.age);
      setPerson(person);
    }
    setIsToastVisible(true);
  };

  const message = person
    ? `You have been identified as ${person.gender} with an age range between ${person.age}.`
    : null;

  const onCloseToast = () => {
    setIsToastVisible(false);
    location !== BOOKS_PATH && setLocation(BOOKS_PATH);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Recommendations"
        ariaHideApp={false}>
        <Box>
          <Heading mb={3}>Recommendations</Heading>
          <WebcamCapture
            onUploadImage={(image) => detect(image, onDetectSuccess)}
            onClose={onClose}
          />
        </Box>
      </Modal>

      <BooksToast isOpen={isToastVisible} message={message} onClose={onCloseToast} />
    </>
  );
};

export default RecommendationModal;
