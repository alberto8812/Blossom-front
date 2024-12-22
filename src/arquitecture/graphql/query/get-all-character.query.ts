import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER = gql`
query Get_all_character($name: String, $status: String, $originId: String, $speciesId: String) {
  get_all_character(name: $name, status: $status, originId: $originId, speciesId: $speciesId) {
    code
    message
    data {
      names
      status
      origin {
        name
        id
      }
    }
  }
}
`;
