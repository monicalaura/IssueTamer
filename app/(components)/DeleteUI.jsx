"use client";

import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageModal from "./MessageModal";
import { useRouter } from "next/navigation";

const DeleteUI = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const deleteIssue = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Issues/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error deleting issue");
      }

      setShowModal(true);
      setModalMessage("Issue deleted successfully");
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to delete issue:", error);
      setShowModal(true);
      setModalMessage("Failed to delete issue");
      setIsSuccess(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (isSuccess) {
      router.refresh();
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteIssue}
      />
      {showModal && (
        <MessageModal
          onClose={closeModal}
          message={modalMessage}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};

export default DeleteUI;
