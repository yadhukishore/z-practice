import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App.jsx';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // Free GraphQL API for countries
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
)
