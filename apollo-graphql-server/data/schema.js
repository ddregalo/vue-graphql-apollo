import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Query {
  character(name: String, birthYear: String, gender: String, homeworld: String, films: [Film]): Author
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
    orbital_period: Integer
    diameter: Integer
    climate: String
    terrain: Stirng
    population: Integer
    residents: [Character]
}

type Film {
  title: String
	episode_id: Integer
  director: String
	release_date: Date
	characters: [Character]
	planets: [Planet]
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
