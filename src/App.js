import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages/Pages';
import { ApolloClient, ApolloProvider, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
loadDevMessages();
loadErrorMessages();
const App = () => {
    let api_url = process.env.API_URI;
    const httpLink = createHttpLink({ uri: api_url });//sss
    const cache = new InMemoryCache();
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: localStorage.getItem('tokenNotedly') ? localStorage.getItem('tokenNotedly') : "",
            }
        }
    });
    const client = new ApolloClient({ link: authLink.concat(httpLink), cache, resolvers: {}, connectToDevTools: true });
    const data = {
        isLog: localStorage.getItem('tokenNotedly') ? true : false
    };
    cache.writeQuery({
        query: gql`
          query IsLog{
            isLog 
          }`,
        data
    });
    client.onResetStore(()=>cache.writeQuery({
        query: gql`
          query IsLog{
            isLog 
          }`,
        data
    }));
    
    return (
        <ApolloProvider client={client}>
            <Pages />
        </ApolloProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

