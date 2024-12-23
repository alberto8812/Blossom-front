import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER_BY_ID = gql`
query Get_one_character($getOneCharacterId: String!) {
  get_one_character(id: $getOneCharacterId) {
    data {
      name
      status
      species
      img
      originId
      speciesId
      id
      origin {
        name
      }
      specie {
        name
      }
    }
    code
    message
  }
}
`;
