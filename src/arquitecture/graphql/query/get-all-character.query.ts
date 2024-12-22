import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER = gql`
query ExampleQuery {
  get_all_character {
    data {
      specie {
        name
      }
      id
      name
      img
    }
  }
}
`;
