import { gql } from "@apollo/client";

export const QUERY_SUBS = gql`
  query Query {
    subs {
      _id
      ingredients
      price
      subName
    }
  }
`;

export const QUERY_CONTACTS = gql`
  query Query {
    contacts {
      _id
      name
      email
      message
    }
  }
`;
