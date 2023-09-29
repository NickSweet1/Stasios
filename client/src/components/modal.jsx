import React, { useEffect, useState } from 'react';

const Modal = ({ setIsOpen }) => {
  const [showModal, setShowModal] = useState(false);

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
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${showModal ? 'translate-y-0' : 'translate-y-full'}`}>

      {/* Modal */}
      <div className={`bg-white p-6 rounded shadow-lg lg:w-1/3 md:w-1/2 text-black relative transform ${showModal ? '-translate-y-1/2' : 'translate-y-full'}`}>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter pin..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
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
  );
};

export default Modal;
