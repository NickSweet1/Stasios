const { gql } = require("apollo-server-express");

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
  type Contact {
    _id: ID
    name: String!
    email: String!
    message: String!
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
  type Query {
    contacts: [Contact]
  }
  type Mutation {
    login(name: String, pin: String!): Auth
    addSub(subName: String!, ingredients: String!, price: Int!): Sub
    removeSub(_id: ID!): Sub
    editSub(_id: ID!, subName: String!, ingredients: [String], price: Int): Sub
    addContact(name: String!, email: String!, message: String!): Contact
  }
`;

module.exports = typeDefs;
