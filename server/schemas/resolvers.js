const { AuthenticationError } = require("apollo-server-express");
const { Sub, User } = require("../models");
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
    removeSub: async (parent, { subName }) => {
      const error = await Sub.findOne({ subName });

      if (!error) {
        throw new Error(
          `No sub by the name of ${subName} has been found. Please try to process your request again.`
        );
      } else {
        const sub = await Sub.deleteOne({ subName });
        console.log(`Sub ${subName} has been deleted`);
        return sub;
      }
    },
    editSub: async (parent, { subName, ingredients, price }) => {
      const sub = await Sub.findOne({ subName });
      
      if (!sub) {
        throw new Error(`Sub with name '${subName}' not found.`);
      }
  
      // Update the sub's properties

      if (ingredients) {
        sub.ingredients = ingredients;
      }
      if (price) {
        sub.price = price;
      }

        const updatedSub = await sub.save();

        return updatedSub;
      }
    }
  };

module.exports = resolvers;
