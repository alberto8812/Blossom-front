import { GET_ALL_CHARACTER } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";


export const getAllCharacters = async (): Promise<any> => {

  const { data } = await graphqlClient.query<any>(
    {
      query: GET_ALL_CHARACTER,
      fetchPolicy: "network-only",
      //fetchPolicy: "no-cache", // No se lee ni se escribe en el caché
      //variables: { paginationAndFilterInput: inputMethod },
      context: {
        headers: {
          authorization: `Bearer `,
        },
      },
    }
  );
  console.log(data);
};
