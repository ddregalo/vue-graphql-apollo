import gql from 'graphql-tag';

export const ALL_CHARACTERS = gql`
    query AllCharacters {
        allCharacters {
            name
            height
            mass
            birth_year
            gender
            homeworld
        }
    }`;

// export const getCharacter = gql`
//     query character($id: Int!) {
//         character(id: $id) {
//             name
//             height
//             mass
//             birth_year
//             gender
//             homeworld
//             films
//         }
//     }`;

// export const getAllFilms = gql`
//     query films {
//         allFilms {
//             title
//             episode_id
//             director
//             producer
//             opening_crawl
//         }
//     }`;

// export const getFilm = gql`
//     query film {
//         film(id: Int!) {
//             title
//             episode_id
//             director
//             producer
//             opening_crawl
//         }
//     }`;





            // characters: [
            //     {
            //         name: 'Katie',
            //         height: "5'8 in.",
            //         mass: '50 kg',
            //         gender: 'F',
            //         homeworld: 'Babeland'
            //     },
            //     {
            //         name: 'Daniel',
            //         height: "5'10 in.",
            //         mass: '73 kg',
            //         gender: 'M',
            //         homeworld: 'Babeland'
            //     }
            // ],
            // msg: 'Daniel is aweaome',