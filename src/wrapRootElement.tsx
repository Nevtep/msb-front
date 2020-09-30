import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import * as typeDefs from './queries/schema.graphql';

const cache = new InMemoryCache();
cache.writeData({
    data: {
        isLoggedIn: false,
        selectedUser: null,
    },
});

const resolvers = {
    Mutation: {
        selectUser: (_, { user }, context) => {
            cache.writeData({
                data: {
                    selectedUser: user,
                },
            });
            return user;
        }
    }
}
const client = new ApolloClient({
    typeDefs,
    resolvers,
    cache,
    link: createUploadLink({
        uri: process.env.GATSBY_API_URI,
        credentials: 'include',
        fetch,
    }),
});

export const wrapRootElement = ({ element }) => {

    return(
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
  )
}