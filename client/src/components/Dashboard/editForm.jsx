import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_COFFEE, QUERY_DESSERT, QUERY_SUBS } from "../../utils/queries";
import {
  EDIT_COFFEE_MENU,
  EDIT_DESSERT_MENU,
  EDIT_MENU_ITEM,
} from "../../utils/mutations";

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
      <h2 className="flex justify-center text-2xl">Edit Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Sub Name:
          <input
            type="text"
            name="subName"
            value={editedItem.subName}
            onChange={handleChange}
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
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
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
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
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg ml-[0.1rem]"
          />
        </label>
        <br />
        <button type="submit" className="pr-[1rem] text-xl">
          Save Changes
        </button>
        <button type="button" className="text-xl" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const DessertEditForm = ({ item, onCancel, onSubmit }) => {
  const [editMenuItem] = useMutation(EDIT_DESSERT_MENU);

  const [editedItem, setEditedItem] = useState({
    _id: item._id,
    name: item.name,
    description: item.description,
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
        name: editedItem.name,
        description: editedItem.description,
        price: editedItem.price,
      },
      refetchQueries: [{ query: QUERY_DESSERT }],
    })
      .then(() => {
        console.log("Dessert item edited successfully");
      })
      .catch((error) => {
        console.error("Error editing Dessert item:", error);
      });
    onSubmit(editedItem);
  };

  return (
    <div className="bg-gray-200 rounded p-4 mt-4">
      <h2 className="flex justify-center text-2xl">Edit Dessert Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
          />
        </label>
        <br />
        <label className="flex flex-col">
          Description:
          <input
            type="text"
            name="description"
            value={editedItem.description}
            onChange={handleChange}
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
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
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg ml-[0.1rem]"
          />
        </label>
        <br />
        <button type="submit" className="pr-[1rem] text-xl">
          Save Changes
        </button>
        <button type="button" className="text-xl" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const CoffeeEditForm = ({ item, onCancel, onSubmit }) => {
  const [editMenuItem] = useMutation(EDIT_COFFEE_MENU);

  const [editedItem, setEditedItem] = useState({
    _id: item._id,
    name: item.name,
    description: item.description,
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
        name: editedItem.name,
        description: editedItem.description,
        price: editedItem.price,
      },
      refetchQueries: [{ query: QUERY_COFFEE }],
    })
      .then(() => {
        console.log("Coffee item edited successfully");
      })
      .catch((error) => {
        console.error("Error editing Coffee item:", error);
      });
    onSubmit(editedItem);
  };

  return (
    <div className="bg-gray-200 rounded p-4 mt-4">
      <h2 className="flex justify-center text-2xl">Edit Dessert Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
          />
        </label>
        <br />
        <label className="flex flex-col">
          Description:
          <input
            type="text"
            name="description"
            value={editedItem.description}
            onChange={handleChange}
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg"
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
            className="w-[13rem] p-3 border-2 border-amber-800 rounded-lg ml-[0.1rem]"
          />
        </label>
        <br />
        <button type="submit" className="pr-[1rem] text-xl">
          Save Changes
        </button>
        <button type="button" className="text-xl" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export { EditForm, DessertEditForm, CoffeeEditForm };
