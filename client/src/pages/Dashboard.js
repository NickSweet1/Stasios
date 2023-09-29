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
      <h2 className='flex justify-center text-2xl'>Edit Menu Item</h2>
      <form onSubmit={handleSubmit} >
        <label className="flex flex-col">
          Sub Name:
          <input
            type="text"
            name="subName"
            value={editedItem.subName}
            onChange={handleChange}
            className='w-[13rem] p-3 border-2 border-amber-800 rounded-lg'
          />
        </label>
        <br />
        <label className="flex flex-col">
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            value={editedItem.ingredients}
            onChange={handleChange}
            className='w-[13rem] p-3 border-2 border-amber-800 rounded-lg'
          />
        </label>
        <br />
        <label className="flex flex-col">
          Price:   
          <input
            type="number"
            name="price"
            value={editedItem.price}
            onChange={handleChange}
            className='w-[13rem] p-3 border-2 border-amber-800 rounded-lg ml-[0.1rem]'
          />
        </label>
        <br />
        <button type="submit" className='pr-[1rem] text-xl'>Save Changes</button>
        <button type="button" className='text-xl' onClick={onCancel}>
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
    <div className="flex flex-col justify-center text-center bg-white rounded p-4 mt-4 text-amber-900 text-shadow-css text-lg opacity-90">
      <h2 className="text-4xl pb-6">Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sub Name:
          <input
            type="text"
            name="subName"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.subName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="pr-[10rem]">
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.ingredients}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="pr-[2rem]">
          Price(ex: 00.00):
          <input
            type="number"
            name="price"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="text-shadow-css" type="submit">Save Changes</button>
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
            className="text-red-500 font-bold pr-3 text-3xl">
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
              className='w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg'
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
            className="text-red-500 font-bold pr-3 text-3xl">
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
      className="flex flex-col items-center min-h-screen max-h-3/4 relative px-4 max-w-[1200px] mx-auto bg-white">
      {/* Add a small top border */}
      <div className="w-full md:w-px  h-1 mt-4"></div>
      <div className="text-3xl md:text-5xl lg:text-6xl text-center mb-6 relative">
        <span className="border-b-4 border-sgreen w-1/3 inline-block"></span>
        <span className="border-b-4 border-white w-1/3 inline-block"></span>
        <span className="border-b-4 border-sred w-1/3 inline-block"></span>
        <span className="relative z-1 bg-white px-2 md:px-4 text-amber-900">Menu</span>
        <br />
        <span className="text-[30px] text-amber-700">
          Sandwiches / Desserts / Delicacies
        </span>{" "}
        {/* Smaller and light grey */}
      </div>
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
