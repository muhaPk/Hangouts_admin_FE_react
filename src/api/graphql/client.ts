import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { REACT_APP_GRAPHQL_URI } from '../../config/consts';

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_URI, // Replace with your actual GraphQL endpoint
  credentials: 'include', // Adjust based on CORS setup
});

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem('accessToken'); // Get token dynamically
  console.log('Sending Token:', token); // Debugging
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
