import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_ADMIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Modal = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [login] = useMutation(LOGIN_ADMIN);

  const [userFormData, setUserFormData] = useState({ pin: "" });
  const [validated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSub = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Log userFormData before making the GraphQL mutation
      console.log("User Form Data:", userFormData);

      const { data } = await login({ variables: userFormData });

      // Log the response from the GraphQL mutation
      console.log("GraphQL Mutation Response:", data);

      if (data) {
        const { token, user } = data.login;
        console.log("User Data:", user);
        Auth.login(token);

        navigate("/dashboard");
        closeModal();
      }
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      pin: "",
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  // Use useEffect to delay the appearance of the modal
  useEffect(() => {
    // Delay for 500 milliseconds (adjust as needed)
    const delayTimer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <form noValidate validated={validated}>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${
          showModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Modal */}
        <div
          className={`bg-white p-6 rounded shadow-lg lg:w-1/3 md:w-1/2 text-black relative transform ${
            showModal ? "-translate-y-1/2" : "translate-y-full"
          }`}
        >
          <div className="mb-4">
            <input
              placeholder="Enter pin..."
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              name="pin"
              value={userFormData.pin}
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleFormSub}
              className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
