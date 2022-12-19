import { gql } from "apollo-boost";

export const moviesQuery = gql`
  query moviesQuery($name: String) {
    movies(name: $name) {
      id
      name
      genre
      rate
      watched
      director {
        name
        id
      }
    }
  }
`;
