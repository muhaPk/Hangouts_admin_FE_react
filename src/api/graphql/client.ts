import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { REACT_APP_GRAPHQL_URI } from '../../config/consts';

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_URI, // Replace with your actual GraphQL endpoint
  credentials: 'include', // Adjust based on authentication needs
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
