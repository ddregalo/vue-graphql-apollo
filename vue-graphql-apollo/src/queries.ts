import gql from 'graphql-tag';

export const getAllCharacters = gql`
    query {
        characters: allCharacters {
            name
            height
            mass
            birth_year
            gender
            homeworld
        }
    }`;

export const getCharacter = gql`
    query {
        character: character(id: Int!) {
            name
            height
            mass
            birth_year
            gender
            homeworld
            films
        }
    }`;

export const getAllFilms = gql`
    query {
        films: allFilms {
            title
            episode_id
            director
            producer
            opening_crawl
        }
    }`;

export const getFilm = gql`
    query {
        film: film(id: Int!) {
            title
            episode_id
            director
            producer
            opening_crawl
        }
    }`;
