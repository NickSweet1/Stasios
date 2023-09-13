const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Subs {
    _id: ID
    subName: String
  }
  type Query {
    subs: [Subs]!
  }

`;

module.exports = typeDefs;
