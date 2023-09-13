const { Subs } = require('../models');

const resolvers = {
  Query: {
    subs: async () => {
      return Subs.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
