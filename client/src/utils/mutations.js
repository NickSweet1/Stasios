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
`

export const DELETE_MENU_ITEM = gql`
  mutation removeSub($_id: ID!) {
    removeSub(_id: $_id) {
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

export const ADD_MENU_ITEM = gql`
  mutation addSub($subName: String!, $ingredients: String!, $price: String) {
    addSub(subName: $subName, ingredients: $ingredients, price: $price) {
      subName
      ingredients
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
