import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: createUploadLink({
        uri: process.env.GATSBY_API_URI,
        credentials: 'include',
        fetch,
    }),
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