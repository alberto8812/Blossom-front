import { characterDetailMappers, GET_ALL_CHARACTER_BY_ID, ResponseCharacterId } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";
import { CharacterEntity } from "../../domain";


export const getAllCharactersById = async (id: string): Promise<CharacterEntity> => {

  const { data } = await graphqlClient.query<ResponseCharacterId>(
    {
      query: GET_ALL_CHARACTER_BY_ID,
      fetchPolicy: "network-only",
      variables: { getOneCharacterId: id },
      context: {
        headers: {
          authorization: `Bearer `,
        },
      },
    }
  );
  const { get_one_character } = data;
  const transformedData = characterDetailMappers(get_one_character.data)
  return transformedData;
};
