import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    uri: process.env.GATSBY_API_URL,
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