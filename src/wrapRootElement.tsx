import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import * as typeDefs from './queries/schema.graphql';
import { GraphQLScalarType, Kind } from 'graphql';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const wsLink = process.browser ? new WebSocketLink({
  uri: process.env.GATSBY_WS_URI || 'ws://localhost:3000/graphql',
  options: {
    reconnect: true
  }
}) : null;

const cache = new InMemoryCache();
cache.writeData({
    data: {
        isLoggedIn: false,
        selectedUser: null,
    },
});

const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
          return new Date(value); // value from the client
        },
        serialize(value) {
          return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
            return new Date(+ast.value) // ast value is always in string format
          }
          return null;
        },
    }),
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
const uploadLink = createUploadLink({
    uri: process.env.GATSBY_API_URI,
    credentials: 'include',
    fetch,
})
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = process.browser ? split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    uploadLink,
  ) : uploadLink;
const client = new ApolloClient({
    typeDefs,
    resolvers,
    cache,
    link: link,
});
export const wrapRootElement = ({ element }) => {

    return(
        <ApolloProvider client={client}>
          <GoogleReCaptchaProvider reCaptchaKey="6Ldj9_YZAAAAAGetAkb8RRaMsZDUItxv1wTiRkVj">
            {element}
          </GoogleReCaptchaProvider>
        </ApolloProvider>
  )
}