import { GET_ALL_ORIGIN, originMappers, ResponseOrigin } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";
import { OriginEntity } from "../../domain";


export const getAllOrigin = async (): Promise<OriginEntity[]> => {

  const { data } = await graphqlClient.query<ResponseOrigin>(
    {
      query: GET_ALL_ORIGIN,
      fetchPolicy: "network-only",
      context: {
        headers: {
          authorization: `Bearer `,
        },
      },
    }
  );
  const { get_all_origin } = data;
  const transformedData = get_all_origin.data.map(originMappers)
  return transformedData;
};
