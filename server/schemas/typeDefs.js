const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Sub {
    _id: ID
    subName: String!
    ingredients: [String]!
    price: Float!
  }
  type User {
    _id: ID
    name: String!
    pin: Int!
  }
  type Query {
    users: [User]
    user(name: String!): User
  }
  type Query {
    subs: [Sub]!
  }

`;

module.exports = typeDefs;
