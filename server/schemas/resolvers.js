const { Sub, User } = require('../models');

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
    }
  },
};

module.exports = resolvers;
