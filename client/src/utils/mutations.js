import { gql } from "@apollo/client";

export const LOGIN_ADMIN = gql`
  mutation Mutation($pin: String!) {
    login(pin: $pin) {
      token
      user {
        pin
      }
    }
  }
`;

export const DELETE_MENU_ITEM = gql`
  mutation removeSub($_id: ID!) {
    removeSub(_id: $_id) {
      _id
    }
  }
`;

export const DELETE_COFFEE_MENU = gql`
  mutation removeCoffee($_id: ID!) {
    removeCoffee(_id: $_id) {
      _id
    }
  }
`;

export const DELETE_DESSERT_MENU = gql`
  mutation removeDessert($_id: ID!) {
    removeDessert(_id: $_id) {
      _id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation removeContact($_id: ID!) {
    removeContact(_id: $_id) {
      _id
    }
  }
`;

export const EDIT_MENU_ITEM = gql`
  mutation editSub(
    $_id: ID!
    $subName: String!
    $ingredients: String
    $price: String
  ) {
    editSub(
      _id: $_id
      subName: $subName
      ingredients: $ingredients
      price: $price
    ) {
      _id
      subName
      ingredients
      price
    }
  }
`;

export const EDIT_COFFEE_MENU = gql`
  mutation editCoffee(
    $_id: ID!
    $name: String!
    $description: String
    $price: String
  ) {
    editCoffee(
      _id: $_id
      name: $name
      description: $description
      price: $price
    ) {
      _id
      name
      description
      price
    }
  }
`;

export const EDIT_DESSERT_MENU = gql`
  mutation editDessert(
    $_id: ID!
    $name: String!
    $description: String
    $price: String
  ) {
    editDessert(
      _id: $_id
      name: $name
      description: $description
      price: $price
    ) {
      _id
      name
      description
      price
    }
  }
`;

export const ADD_MENU_ITEM = gql`
  mutation addSub($subName: String!, $ingredients: String!, $price: String) {
    addSub(subName: $subName, ingredients: $ingredients, price: $price) {
      subName
      ingredients
      price
    }
  }
`;

export const ADD_COFFEE_MENU = gql`
  mutation addCoffee($name: String!, $description: String!, $price: String) {
    addCoffee(name: $name, description: $description, price: $price) {
      name
      description
      price
    }
  }
`;

export const ADD_DESSERT_MENU = gql`
  mutation addDessert($name: String!, $description: String!, $price: String) {
    addDessert(name: $name, description: $description, price: $price) {
      name
      description
      price
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addSub($name: String!, $email: String!, $message: String!) {
    addContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;
