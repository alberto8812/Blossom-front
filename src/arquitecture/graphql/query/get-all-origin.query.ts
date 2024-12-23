import { gql } from "@apollo/client";

export const GET_ALL_ORIGIN = gql`
query Get_all_origin {
  get_all_origin {
    code
    message
    data {
      name
      id
    }
  }
}
`;
