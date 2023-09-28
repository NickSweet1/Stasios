import { gql } from "@apollo/client";

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
