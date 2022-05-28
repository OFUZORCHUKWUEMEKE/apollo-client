import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  import App from "./App";

  const client = new ApolloClient({
    uri: 'http://localhost:7000',
    cache: new InMemoryCache()
  });

  export default (
      <ApolloProvider client={client}>
          <App/>
      </ApolloProvider>
  )