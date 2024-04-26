"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MessageModal from "./MessageModal";

const IssueForm = ({ issue }) => {
  //edit mode
  const EDITMODE = issue._id === "new" ? false : true;
  const router = useRouter();

  const defaultIssueData = {
    title: "",
    description: "",
    category: "Technical Support",
    priority: 1,
    progress: 0,
    status: "not started",
    active: true,
  };

  //if we edit an issue, prefill the form
  if (EDITMODE) {
    defaultIssueData["title"] = issue.title;
    defaultIssueData["description"] = issue.description;
    defaultIssueData["category"] = issue.category;
    defaultIssueData["priority"] = issue.priority;
    defaultIssueData["progress"] = issue.progress; //progress bar is not shown anymore
    defaultIssueData["status"] = issue.status;
    defaultIssueData["active"] = issue.active;
  }

  const [formData, setFormData] = useState(defaultIssueData);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await (EDITMODE
        ? fetch(`/api/Issues/${issue._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ formData }),
          })
        : fetch("/api/Issues", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }));

      if (!res.ok) {
        throw new Error(
          EDITMODE ? "Failed to update Issue" : "Failed to post the issue"
        );
      }

      setShowModal(true);
      setModalMessage(
        EDITMODE ? "Issue updated successfully" : "Issue posted successfully"
      );
      setIsSuccess(true);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      setShowModal(true);
      setModalMessage(error.message);
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
        router.push("/");
        router.refresh();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 lg:w-1/2 w-full"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Edit an issue" : "Report an issue"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Technical Support">Technical Support</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Security Concerns">Security Concerns</option>
          <option value="Legal Matters">Legal Matters</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            className="bg-accent"
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        {/* This is a comment 
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          onChange={handleChange}
          value={formData.progress}
        />
        */}
        <label>Status</label>
        <select name="status" onChange={handleChange} value={formData.status}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update Issue" : "Post Issue"}
        />
      </form>
      {showModal && (
        <MessageModal
          onClose={closeModal}
          message={modalMessage}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default IssueForm;
