const { AuthenticationError } = require('apollo-server-express');
const { Sub, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    subs: async () => {
      return Sub.find();
    },
    users: async () => {
      return User.find();
    },
    user: async(parent, { name }) => {
      return User.findOne({ name });
    },
    user: async(parent, { pin }) => {
      return User.findOne({ pin });
    },
    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    } 
  },
  Mutation: {
    login: async (parent, { pin }) => {
      const user = await User.findOne({ pin });

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
