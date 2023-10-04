import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CONTACTS } from "../../utils/queries"; // Adjust the import path
import { DELETE_COMMENT } from "../../utils/mutations";

const MessageCardComponent = () => {
  const { loading, error, data } = useQuery(QUERY_CONTACTS);
  const [deleteComment] = useMutation(DELETE_COMMENT);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error loading messages: {error.message}</div>;
  }

  const handleDeleteComment = (itemId) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete this comment?`
    );
    if (userConfirmed) {
      console.log(itemId);
      deleteComment({
        variables: { _id: itemId },
        refetchQueries: [{ query: QUERY_CONTACTS }],
      })
        .then(() => {
          console.log("Comment deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting comment:", error);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center message-card-container drop-shadow-2xl">
      <h1 className="text-center text-2xl text-amber-950 bg-white mb-5 text-shadow-css rounded-lg">
        Messages
      </h1>
      <div className="message-card-scroll">
        {data.contacts.map((contact) => (
          <div
            key={contact._id}
            className="message-card bg-white text-amber-800 text-shadow-css">
            <button
              onClick={() => handleDeleteComment(contact._id)}
              className="text-red-500 font-bold relative float-right text-3xl">
              X
            </button>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCardComponent;
