import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SUBS, QUERY_DESSERT, QUERY_COFFEE } from "../../utils/queries";
import {
  ADD_MENU_ITEM,
  ADD_DESSERT_MENU,
  ADD_COFFEE_MENU,
} from "../../utils/mutations";

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
        <button className="text-shadow-css" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

const DessertAddForm = ({ item, onCancel, onSubmit }) => {
  const [addMenuItem] = useMutation(ADD_DESSERT_MENU);

  const [addedItem, setAddedItem] = useState({
    name: "",
    description: "",
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
        name: addedItem.name,
        description: addedItem.description,
        price: addedItem.price,
      },
      refetchQueries: [{ query: QUERY_DESSERT }],
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
      <h2 className="text-4xl pb-6">Add Dessert Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="pr-[10rem]">
          Description of the item:
          <input
            type="text"
            name="description"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.description}
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
        <button className="text-shadow-css" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

const CoffeeAddForm = ({ item, onCancel, onSubmit }) => {
  const [addMenuItem] = useMutation(ADD_COFFEE_MENU);

  const [addedItem, setAddedItem] = useState({
    name: "",
    description: "",
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
        name: addedItem.name,
        description: addedItem.description,
        price: addedItem.price,
      },
      refetchQueries: [{ query: QUERY_COFFEE }],
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
      <h2 className="text-4xl pb-6">Add Coffee Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="pr-[10rem]">
          Description of the item:
          <input
            type="text"
            name="description"
            className="w-[21.5rem] p-3 border-2 border-amber-800 rounded-lg"
            value={addedItem.description}
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
        <button className="text-shadow-css" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export { AddForm, DessertAddForm, CoffeeAddForm };
