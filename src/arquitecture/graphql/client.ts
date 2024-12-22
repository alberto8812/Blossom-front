import { ApolloClient, ApolloLink, InMemoryCache, ServerError } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";


const errorLink = onError(({ graphQLErrors, networkError }) => {
    const isGraphQLErrors = Array.isArray(graphQLErrors) && graphQLErrors.some(error => error.statusa === 401);;
    if (networkError || isGraphQLErrors) {
        const statusCode = (networkError as ServerError)?.statusCode;
        if (isGraphQLErrors || statusCode === 401) {
            localStorage.clear();

            sessionStorage.clear();
            window.location.href = '';
        }
    }
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
    }
});


const uploadLink = createUploadLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
});

const link = ApolloLink.from([errorLink, uploadLink]);


const graphqlClient = new ApolloClient({
    cache: new InMemoryCache({
        addTypename: false,
    }),
    link: link,
});

export { graphqlClient };

