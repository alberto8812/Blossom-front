import { characterMappers, GET_ALL_CHARACTER, ResponseCharacter } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";
import { CharacterEntity, CharacterFilter } from "../../domain";


export const getAllCharacters = async (filter: CharacterFilter): Promise<CharacterEntity[]> => {

  const { data } = await graphqlClient.query<ResponseCharacter>(
    {
      query: GET_ALL_CHARACTER,
      fetchPolicy: "network-only",
      variables: { ...filter },
      context: {
        headers: {
          authorization: `Bearer `,
        },
      },
    }
  );
  const { get_all_character } = data;
  const transformedData = get_all_character.data.map(characterMappers)
  return transformedData;
};
