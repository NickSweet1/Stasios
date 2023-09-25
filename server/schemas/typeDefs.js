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
    pin: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(name: String, pin: String): User
    me: User
  }
  type Query {
    subs: [Sub]!
    sub(subName: String!): Sub
  }
  type Mutation {
    login(name: String, pin: String!): Auth
    addSub(subName: String!, ingredients: String!, price: Int!): Sub
    removeSub(subName: String!): Sub
    editSub(subName: String!, ingredients: [String], price: Int): Sub

  }

`;

module.exports = typeDefs;
