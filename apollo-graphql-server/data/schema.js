import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';
// import mocks from './mocks';
// homeworld: Planet
// films: [Film]
const typeDefs = `
type Query {
  allCharacters: [Character!]!
  character(id: Int!): Character
  getFortuneCookie: String
}

type Character {
  name: String
  height: String
  mass: String
  hairColour: String
  skinColor: Stirng
  eyeColor: String
	birthYear: String
  gender: String
  homeworld: String
  films: [String]
  species: [String]
  vehicles: [String]
  starships: [String]
  created: String
  edited: String
  url: Stirng
}
`;


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

// type Film {
// id: Int
// title: String
// episode_id: Int
// director: String
// release_date: String
// characters: [Character]
// planets: [Planet]
// }

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
