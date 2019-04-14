import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Query {
  character(name: String): Character
  allCharacters: [Character]
  getFortuneCookie: String
}

type Character {
  name: String
	birthYear: String
	gender: String
	homeworld: Planet
	films: [Film]
}

type Planet {
    name: String
    orbital_period: Int
    diameter: Int
    climate: String
    terrain: String
    population: Int
    residents: [Character]
}

type Film {
  title: String
	episode_id: Int
  director: String
	release_date: String
	characters: [Character]
	planets: [Planet]
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
