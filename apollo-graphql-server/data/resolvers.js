import axios from 'axios';

const baseUrl = 'https://swapi.co/api/';

const resolvers = {
    Query: {
        allCharacters: () => {
            return axios.get(baseUrl + 'people/')
                .then(res => {
                    console.log('All characters response: ', res.data);
                    return res.data
                })
                .catch(err => {
                    console.log("There has been an error processing your request. Please try again.");
                });
        },
        character: (parent, args) => {
            const { id } = args
            return axios.get(baseUrl + `people/${id}`)
                    .then(res => {
                        console.log('Single character response: ', res.data);
                        return res.data
                    })
                    .catch(error => {
                        console.log("There has been an error processing your request. Please try again.");
                    });
        }
    }
  };
  
  export default resolvers;