import { characterMappers, GET_ALL_CHARACTER, ResponseCharacter } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";
import { CharacterEntity } from "../../domain";


export const getAllCharacters = async (): Promise<CharacterEntity[]> => {

  const { data } = await graphqlClient.query<ResponseCharacter>(
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
  const { get_all_character } = data;
  console.log(data, "data");
  const transformedData = get_all_character.data.map(characterMappers)
  return transformedData;
};
