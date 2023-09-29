import React, { useState } from "react";
import { ADD_COMMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const ContactForm = () => {
  const [addComment] = useMutation(ADD_COMMENT);

  const [submitted, setSubmitted] = useState(false);

  const [addedComment, setAddedComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddedComment({ ...addedComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addedComment);
    addComment({
      variables: {
        name: addedComment.name,
        email: addedComment.email,
        message: addedComment.message,
      },
    })
      .then(() => {
        console.log("Comment added successfully");
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-4xl bg-white rounded-lg bg-opacity-70 ">
          Thank you! We'll be in touch soon.
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} method="POST" className="w-[500px] ">
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={addedComment.name}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-amber-950 bg-white border-0 rounded text-shadow-css outline-none drop-shadow-2xl"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={addedComment.email}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-amber-950 bg-white border-0 rounded text-shadow-css outline-none drop-shadow-2xl"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          value={addedComment.message}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-amber-950 bg-white border-0 rounded text-shadow-css outline-none drop-shadow-2xl"
          required
        />
      </div>
      <div className="pt-0 mb-3 flex justify-center">
        <button
          className="hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white bg-amber-950 uppercase transition-all duration-150 ease-linear rounded drop-shadow-2xl outline-none"
          type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
