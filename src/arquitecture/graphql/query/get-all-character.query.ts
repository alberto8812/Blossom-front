import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER = gql`
query Get_all_character($originId: String, $speciesId: String, $status: String, $name: String) {
  get_all_character(originId: $originId, speciesId: $speciesId, status: $status, name: $name) {
    data {
      id
      img
      name
      status
      specie {
        name
      }
    }
    code
    message
  }
}
`;

