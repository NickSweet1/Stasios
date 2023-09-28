import { gql } from "@apollo/client";

export const DELETE_MENU_ITEM = gql`
  mutation removeSub($_id: ID!) {
    removeSub(_id: $_id) {
      _id
    }
  }
`;
