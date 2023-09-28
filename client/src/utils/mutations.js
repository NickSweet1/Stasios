import { gql } from "@apollo/client";

export const DELETE_MENU_ITEM = gql`
  mutation removeSub($_id: ID!) {
    removeSub(id: $_id) {
      _id
    }
  }
`;
