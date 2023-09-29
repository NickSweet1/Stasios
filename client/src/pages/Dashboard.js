import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SUBS } from "../utils/queries";
import {
  DELETE_MENU_ITEM,
  EDIT_MENU_ITEM,
  ADD_MENU_ITEM,
} from "../utils/mutations";
import MessageCardComponent from "../components/commentDisplay";

const EditForm = ({ item, onCancel, onSubmit }) => {
  const [editMenuItem] = useMutation(EDIT_MENU_ITEM);

  const [editedItem, setEditedItem] = useState({
    _id: item._id,
    subName: item.subName,
    ingredients: item.ingredients,
    price: item.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editedItem);
    editMenuItem({
      variables: {
        _id: editedItem._id,
        subName: editedItem.subName,
        ingredients: editedItem.ingredients,
        price: editedItem.price,
      },
      refetchQueries: [{ query: QUERY_SUBS }],
    })
      .then(() => {
        console.log("Menu item edited successfully");
      })
      .catch((error) => {
        console.error("Error editing menu item:", error);
      });
    onSubmit(editedItem);
  };

  return (
    <div className="bg-gray-200 rounded p-4 mt-4">
      <h2>Edit Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sub Name:
          <input
            type="text"
            name="subName"
            value={editedItem.subName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            value={editedItem.ingredients}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={editedItem.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const AddForm = ({ item, onCancel, onSubmit }) => {
  const [addMenuItem] = useMutation(ADD_MENU_ITEM);

  const [addedItem, setAddedItem] = useState({
    subName: "",
    ingredients: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddedItem({ ...addedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addedItem);
    addMenuItem({
      variables: {
        subName: addedItem.subName,
        ingredients: addedItem.ingredients,
        price: addedItem.price,
      },
      refetchQueries: [{ query: QUERY_SUBS }],
    })
      .then(() => {
        console.log("Menu item added successfully");
      })
      .catch((error) => {
        console.error("Error adding menu item:", error);
      });
    // onSubmit(addedItem);
  };

  return (
    <div className="bg-gray-200 rounded p-4 mt-4">
      <h2>Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sub Name:
          <input
            type="text"
            name="subName"
            value={addedItem.subName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            value={addedItem.ingredients}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price(ex: 00.00):
          <input
            type="number"
            name="price"
            value={addedItem.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

const Menu = () => {
  const { data, loading, error } = useQuery(QUERY_SUBS);
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM);

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

  if (error) {
    console.error("GraphQL Error:", error);
    return (
      <div className="error-message">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const menuItems = data.subs;
  const midpoint = Math.ceil(menuItems.length / 2);

  // Split the menuItems array into two separate arrays
  const firstHalf = menuItems.slice(0, midpoint);
  const secondHalf = menuItems.slice(midpoint);

  const handleDeleteMenuItem = (itemId, subName) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete this sub?`
    );
    if (userConfirmed) {
      console.log(itemId);
      deleteMenuItem({
        variables: { _id: itemId },
        refetchQueries: [{ query: QUERY_SUBS }],
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
        <div className="bg-gray-100 rounded-lg p-4">
          <button
            onClick={() => handleDeleteMenuItem(item._id)}
            className="text-red-500 font-bold">
            X
          </button>

          <strong className="text-lg md:text-xl lg:text-2xl">
            {item.subName}
          </strong>
          <p className="mt-2">
            {item.ingredients}
            <br />
            <em className="italic">${parseFloat(item.price).toFixed(2)}</em>
          </p>
          <button
            onClick={() => handleEditMenuItem(item._id)}
            className="text-blue-500 font-bold">
            Edit
          </button>
          {editItemId === item._id && (
            <EditForm
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
        <div className="bg-gray-100 rounded-lg p-4">
          <button
            onClick={() => handleDeleteMenuItem(item._id)}
            className="text-red-500 font-bold border-black">
            X
          </button>
          <strong className="text-lg md:text-xl lg:text-2xl">
            {item.subName}
          </strong>
          <p className="mt-2">
            {item.ingredients}
            <br />
            <em className="italic">${parseFloat(item.price).toFixed(2)}</em>
          </p>
          <button
            onClick={() => handleEditMenuItem(item._id)}
            className="text-blue-500 font-bold">
            Edit
          </button>
          {editItemId === item._id && (
            <EditForm
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
      className="flex flex-col items-center min-h-screen max-h-3/4 relative px-4 max-w-[1200px] mx-auto">
      {/* Add a small top border */}
      <div className="w-full md:w-px bg-gray-300 h-1 mt-4"></div>
      <div className="text-3xl md:text-5xl lg:text-6xl text-center mb-6 relative">
        <span className="border-b-4 border-sgreen w-1/3 inline-block"></span>
        <span className="border-b-4 border-white w-1/3 inline-block"></span>
        <span className="border-b-4 border-sred w-1/3 inline-block"></span>
        <span className="relative z-1 bg-white px-2 md:px-4">Menu</span>
        <br />
        <span className="text-[30px] text-gray-400">
          Sandwiches / Desserts / Delicacies
        </span>{" "}
        {/* Smaller and light grey */}
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[600px] p-10">
          <ul className="text-gray-600">
            {renderFirstMenuItems()}
            {/* Add more menu items here */}
          </ul>
        </div>
        <div className="w-full md:w-px bg-gray-300 md:h-[80vh]"></div>
        <div className="w-full md:w-[600px] p-10">
          <ul className="text-gray-600">
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

const Dashboard = () => {
  return (
    <>
      <div>
        <Menu />
        <AddForm />
        <MessageCardComponent />
      </div>
    </>
  );
};
export default Dashboard;
