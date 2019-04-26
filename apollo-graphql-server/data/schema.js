import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';
// import mocks from './mocks';

const typeDefs = `
type Query {
  allCharacters: [Character!]!
  character(id: Int!): Character
  allFilms: [Film!]!
  film(id: Int!): Film
  films: [Film]!
  getFortuneCookie: String
}

type Character {
  name: String
  height: String
  mass: String
  hairColour: String
  skin_color: String
  eye_color: String
	birth_year: String
  gender: String
  homeworld: String
  films: Film
  species: [String]
  vehicles: [String]
  starships: [String]
  created: String
  edited: String
  url: String
}

type Film {
  title: String
  episode_id: Int
  opening_crawl: String
  director: String
  producer: String
  release_date: String
  characters: [String]
  planets: [String]
  starships: [String]
  vehicles: [String]
  species: [String],
  created: String
  edited: String
  url: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;


// Additional snippets below to add

// CRUD
// type Mutation {
//   createUser(name: String!): User!
//   updateUser(id: ID!, name: String!): User
//   deleteUser(id: ID!): User
// }


// type Planet {
//   id: Int
//   name: String
//   orbital_period: Int
//   diameter: Int
//   climate: String
//   terrain: String
//   population: Int
//   residents: [Character]
// }
