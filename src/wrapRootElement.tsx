import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    uri: 'https://msb-api-test.herokuapp.com/graphql',
    credentials: 'include',
    fetch,
});

cache.writeData({
    data: {
        isLoggedIn: false,
    },
});

export const wrapRootElement = ({ element }) => {

    return(
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
    )
}