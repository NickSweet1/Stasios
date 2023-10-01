const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Sub {
    _id: ID
    subName: String!
    ingredients: String!
    price: String!
  }
  type Coffee {
    _id: ID
    name: String!
    description: String!
    price: String!
  }
  type Dessert {
    _id: ID
    name: String!
    description: String!
    price: String!
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
    coffee: [Coffee]!
    sub(name: String!): Coffee
  }
  type Query {
    dessert: [Dessert]!
    sub(name: String!): Dessert
  }
  type Query {
    contacts: [Contact]
  }
  type Mutation {
    login(name: String, pin: String!): Auth
    addSub(subName: String!, ingredients: String!, price: String): Sub
    removeSub(_id: ID!): Sub
    editSub(_id: ID!, subName: String!, ingredients: String, price: String): Sub
    addCoffee(name: String!, description: String!, price: String): Coffee
    removeCoffee(_id: ID!): Coffee
    editCoffee(
      _id: ID!
      name: String!
      description: String
      price: String
    ): Coffee
    addDessert(name: String!, description: String!, price: String): Dessert
    removeDessert(_id: ID!): Dessert
    editDessert(
      _id: ID!
      name: String!
      description: String
      price: String
    ): Dessert
    addContact(name: String!, email: String!, message: String!): Contact
  }
`;

module.exports = typeDefs;
