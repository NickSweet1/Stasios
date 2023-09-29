const { AuthenticationError } = require("apollo-server-express");
const { Sub, User, Contact } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    subs: async () => {
      return Sub.find();
    },
    sub: async (parent, { subName }) => {
      return Sub.findOne({ subName });
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
    login: async (parent, { pin }) => {
      const user = await User.findOne({ pin });

      const token = signToken(user);

      return { token, user };
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
    addContact: async (parent, { name, email, message }) => {
      const contact = await Contact.create({ name, email, message });
      return contact;
    },
  },
};

module.exports = resolvers;
