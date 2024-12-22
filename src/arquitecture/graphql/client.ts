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
            window.location.href = '';  // tambien si puede usar `history.push('/login')` con react-router
        }
    }
    // Verificar errores de GraphQL (en caso de que sea necesario)
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
    }
});


const uploadLink = createUploadLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
});

/**'
 * link: Se encarga de unir los links de error y de subida.
 * 
 */
const link = ApolloLink.from([errorLink, uploadLink]);


/**
 * graphqlClient: Cliente de Apollo para realizar peticiones a GraphQL.
 */
const graphqlClient = new ApolloClient({
    cache: new InMemoryCache({
        addTypename: false,
    }),
    link: link,
});

export { graphqlClient };

