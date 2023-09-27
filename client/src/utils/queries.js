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
`