import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CONTACTS } from "../utils/queries"; // Adjust the import path

const MessageCardComponent = () => {
  const { loading, error, data } = useQuery(QUERY_CONTACTS);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error loading messages: {error.message}</div>;
  }

  return (
    <div className="message-card-container">
      <h1>Messages</h1>
      <div className="message-card-scroll">
        {data.contacts.map((contact) => (
          <div key={contact._id} className="message-card bg-white">
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
