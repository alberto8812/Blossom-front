import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ApolloProvider } from "@apollo/client";

import "./index.css";
import { router } from "./presentation/router/router";
import { graphqlClient } from "./arquitecture/graphql/client";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ApolloProvider client={graphqlClient}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </QueryClientProvider>
    </>
  );
};
