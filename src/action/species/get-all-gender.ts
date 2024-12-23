import { genderMappers, GenderResponse, GET_ALL_GENDER } from "../../arquitecture";
import { graphqlClient } from "../../arquitecture/graphql/client";
import { GenderEntity } from "../../domain";


export const getAllGender = async (): Promise<GenderEntity[]> => {

  const { data } = await graphqlClient.query<GenderResponse>(
    {
      query: GET_ALL_GENDER,
      fetchPolicy: "network-only",
      context: {
        headers: {
          authorization: `Bearer `,
        },
      },
    }
  );
  const { get_all_gender } = data;
  const transformedData = get_all_gender.data.map(genderMappers)
  return transformedData;
};
