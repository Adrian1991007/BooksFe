import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BooksToast = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: onClose,
        progress: undefined
      });
    }
  }, [isOpen, onClose, message]);

  return <ToastContainer />;
};

export default BooksToast;
