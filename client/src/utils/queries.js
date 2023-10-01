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

export const QUERY_COFFEE = gql`
  query Query {
    coffees {
      _id
      description
      price
      name
    }
  }
`;
export const QUERY_DESSERT = gql`
  query Query {
    desserts {
      _id
      description
      price
      name
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
