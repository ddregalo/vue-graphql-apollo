'use strict'

const { makeExecutableSchema } = require('graphql-tools');

// Define our schema using the GraphQL schema language
const typeDefs = `
  type Artist {
    id: Int!
    artistName: String!
    yearOfBirth: String!
    artworks: [Artwork]
  }
  type Artwork {
    id: Int!
    artist: Artist!
    title: String!
    year: Integer!
    size: String!
    price: Integer
  }

  type Query {
      allArtists: [User]
      getArtist(id: Int!): User
      allArtworks: [Artwork]
      getArtwork(id: Int!): Post
  }

  type Mutation {
      login (artistName: String!, password: String!): String
      createArtist (artistName String!, email: String!, password: String!): Artist
      addPost (artist: Sting!, title: String!, year: Integer!, size: String!, price: Integer!): Artwork
  }
`;
