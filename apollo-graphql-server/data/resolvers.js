import axios from 'axios';

const baseUrl = 'https://swapi.co/api/';

const resolvers = {
    Query: {
        allCharacters: () => {
            return axios.get(baseUrl + 'people/')
                .then(res => {
                    return res.data.results;
                })
                .catch(err => {
                    console.log("There has been an error processing your request. Please try again.");
                });
        },
        character: (parent, args) => {
            const { id } = args
            return axios.get(`${baseUrl}people/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(error => {
                    console.log("There has been an error processing your request. Please try again.");
                });
        },
        allFilms: () => {
            return axios.get(baseUrl + 'films/')
                .then(res => {
                    return res.data.results
                });
        },
        film: (parent, args) => {
            const { id } = args
            return axios.get(baseURL + `films/${id}}`)
                .then(res => {
                    res.data
                });
        },
    },
    Character: {
        films: (parent, args, ctx, info) => {
            let urlArray = parent.url.split('/');
            const filmId = urlArray[urlArray.length - 2];
            console.log('filmId: ', filmId);
            return axios.get(`${baseUrl}films/${filmId}`)
                .then(res => {
                    return res.data
                });
        },
    }
};
  
export default resolvers;