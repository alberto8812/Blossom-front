import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER = gql`
query ExampleQuery {
  get_all_origin {
    message
  }
  get_all_gender {
    message
  }
  get_all_character {
    data {
      specie {
        name
      }
      name
      img
    }
  }
}
`;
