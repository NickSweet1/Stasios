import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_COFFEE } from "../../utils/queries";
import { DELETE_COFFEE_MENU } from "../../utils/mutations";
import { CoffeeEditForm } from "./editForm";

const CoffeeMenu = () => {
  // Use the useQuery hook to fetch data and handle errors
  const { data, loading, error } = useQuery(QUERY_COFFEE);
  const [deleteMenuItem] = useMutation(DELETE_COFFEE_MENU);

  const handleEditMenuItem = (itemId) => {
    setEditItemId(itemId);
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
  };
  const handleEditFormSubmit = (editedItem) => {};

  const [editItemId, setEditItemId] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle GraphQL query errors
  if (error) {
    console.error("GraphQL Error:", error);
    return (
      <div className="error-message">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  // Assuming your GraphQL query returns an array of menu items
  console.log(data);
  const menuItems = data.coffees;

  const midpoint = Math.ceil(menuItems.length / 2);

  // Split the menuItems array into two separate arrays
  const firstHalf = menuItems.slice(0, midpoint);
  const secondHalf = menuItems.slice(midpoint);

  const handleDeleteMenuItem = (itemId, name) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete this coffee?`
    );
    if (userConfirmed) {
      console.log(itemId);
      deleteMenuItem({
        variables: { _id: itemId },
        refetchQueries: [{ query: QUERY_COFFEE }],
      })
        .then(() => {
          console.log("Menu item deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting menu item:", error);
        });
    }
  };

  const renderFirstMenuItems = () => {
    return firstHalf.map((item) => (
      <li key={item._id} className="mb-4">
        <div className="bg-gray-100 rounded-lg p-4 text-amber-800">
          <button
            onClick={() => handleDeleteMenuItem(item._id)}
            className="text-red-500 font-bold pr-3 text-3xl">
            X
          </button>
          <strong className="text-lg md:text-xl lg:text-2xl text-amber-950">
            {item.name}
          </strong>
          <p className="mt-2">
            {item.description}
            <br />
            <em className="italic">${parseFloat(item.price).toFixed(2)}</em>
          </p>
          <button
            onClick={() => handleEditMenuItem(item._id)}
            className="text-blue-500 font-bold">
            Edit
          </button>
          {editItemId === item._id && (
            <CoffeeEditForm
              className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
              item={menuItems.find((item) => item._id === editItemId)}
              onCancel={handleCancelEdit}
              onSubmit={handleEditFormSubmit}
            />
          )}
        </div>
      </li>
    ));
  };

  const renderSecondMenuItems = () => {
    return secondHalf.map((item) => (
      <li key={item._id} className="mb-4">
        <div className="bg-gray-100 rounded-lg p-4 text-amber-800">
          <button
            onClick={() => handleDeleteMenuItem(item._id)}
            className="text-red-500 font-bold pr-3 text-3xl">
            X
          </button>
          <strong className="text-lg md:text-xl lg:text-2xl text-amber-950">
            {item.name}
          </strong>
          <p className="mt-2">
            {item.description}
            <br />
            <em className="italic">${parseFloat(item.price).toFixed(2)}</em>
          </p>
          <button
            onClick={() => handleEditMenuItem(item._id)}
            className="text-blue-500 font-bold">
            Edit
          </button>
          {editItemId === item._id && (
            <CoffeeEditForm
              className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
              item={menuItems.find((item) => item._id === editItemId)}
              onCancel={handleCancelEdit}
              onSubmit={handleEditFormSubmit}
            />
          )}
        </div>
      </li>
    ));
  };

  return (
    <div
      name="menu"
      className="flex flex-col items-center min-h-screen max-h-3/4 relative px-4 max-w-[1200px] mx-auto bg-white">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[600px] p-10">
          <ul className="text-amber-900">
            {renderFirstMenuItems()}
            {/* Add more menu items here */}
          </ul>
        </div>
        <div className="w-full md:w-px bg-gray-300 md:h-[80vh]"></div>
        <div className="w-full md:w-[600px] p-10">
          <ul className="text-amber-900">
            {renderSecondMenuItems()}
            {/* Add more menu items here */}
          </ul>
        </div>
      </div>
      {/* Add a small bottom border */}
      <div className="w-full md:w-px bg-gray-300 h-1"></div>
    </div>
  );
};

export default CoffeeMenu;
