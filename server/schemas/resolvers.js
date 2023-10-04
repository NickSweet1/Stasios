const { AuthenticationError } = require("apollo-server-express");
const { Sub, User, Contact, Coffee, Dessert } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    subs: async () => {
      return Sub.find();
    },
    sub: async (parent, { subName }) => {
      return Sub.findOne({ subName });
    },
    coffees: async () => {
      return Coffee.find();
    },
    coffee: async (parent, { name }) => {
      return Coffee.findOne({ name });
    },
    desserts: async () => {
      return Dessert.find();
    },
    dessert: async (parent, { name }) => {
      return Dessert.findOne({ name });
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { name }) => {
      return User.findOne({ name });
    },
    user: async (parent, { pin }) => {
      return User.findOne({ pin });
    },
    contacts: async () => {
      return Contact.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (_, args) => {
      try {
        const { pin } = args;
        // Find the user by either username or email
        const user = await User.findOne({ pin });
        if (!user) {
          throw new Error("User Not Found");
        }

        // Verify the pin
        const pinMatch = bcrypt.compare(pin, user.pin);

        if (!pinMatch) {
          throw new Error("Wrong Pin!");
        }

        // Generate an authentication token
        const token = signToken(user);

        return {
          user,
          token,
        };
      } catch (error) {
        throw new Error(`Failed To Locate User : ${error.message}`);
      }
    },
    addSub: async (parent, { subName, ingredients, price }) => {
      const sub = await Sub.create({ subName, ingredients, price });

      return sub;
    },
    removeSub: async (parent, { _id }) => {
      const sub = await Sub.findOne({ _id });

      if (!sub) {
        throw new Error(`No sub with ID ${_id} found.`);
      } else {
        await Sub.deleteOne({ _id });
        console.log(`Sub ${_id} has been deleted`);
        return sub;
      }
    },
    editSub: async (parent, { _id, subName, ingredients, price }) => {
      const sub = await Sub.findOne({ _id });

      if (!sub) {
        throw new Error(`Sub with ID '${_id}' not found.`);
      }

      // Update the sub's properties
      if (subName) {
        sub.subName = subName;
      }

      if (ingredients) {
        sub.ingredients = ingredients;
      }

      if (price) {
        sub.price = price;
      }

      const updatedSub = await sub.save();

      return updatedSub;
    },
    addCoffee: async (parent, { name, description, price }) => {
      const coffee = await Coffee.create({ name, description, price });

      return coffee;
    },
    removeCoffee: async (parent, { _id }) => {
      const coffee = await Coffee.findOne({ _id });

      if (!coffee) {
        throw new Error(`No coffee with ID ${_id} found.`);
      } else {
        await Coffee.deleteOne({ _id });
        console.log(`Coffee ${_id} has been deleted`);
        return coffee;
      }
    },
    editCoffee: async (parent, { _id, name, description, price }) => {
      const coffee = await Coffee.findOne({ _id });

      if (!coffee) {
        throw new Error(`Coffee with ID '${_id}' not found.`);
      }

      // Update the coffee's properties
      if (name) {
        coffee.name = name;
      }

      if (description) {
        coffee.description = description;
      }

      if (price) {
        coffee.price = price;
      }

      const updatedCoffee = await coffee.save();

      return updatedCoffee;
    },
    addDessert: async (parent, { name, description, price }) => {
      const dessert = await Dessert.create({ name, description, price });

      return dessert;
    },
    removeDessert: async (parent, { _id }) => {
      const dessert = await Dessert.findOne({ _id });

      if (!dessert) {
        throw new Error(`No dessert with ID ${_id} found.`);
      } else {
        await Dessert.deleteOne({ _id });
        console.log(`Dessert ${_id} has been deleted`);
        return dessert;
      }
    },
    editDessert: async (parent, { _id, name, description, price }) => {
      const dessert = await Dessert.findOne({ _id });

      if (!dessert) {
        throw new Error(`Dessert with ID '${_id}' not found.`);
      }

      // Update the dessert's properties
      if (name) {
        dessert.name = name;
      }

      if (description) {
        dessert.description = description;
      }

      if (price) {
        dessert.price = price;
      }

      const updatedDessert = await dessert.save();

      return updatedDessert;
    },
    addContact: async (parent, { name, email, message }) => {
      const contact = await Contact.create({ name, email, message });
      return contact;
    },
    removeContact: async (parent, { _id }) => {
      const contact = await Contact.findOne({ _id });

      if (!contact) {
        throw new Error(`No comment with ID ${_id} found.`);
      } else {
        await Contact.deleteOne({ _id });
        console.log(`Comment ${_id} has been deleted`);
        return contact;
      }
    },
  },
};

module.exports = resolvers;
