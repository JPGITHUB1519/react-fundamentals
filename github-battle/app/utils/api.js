var axios = require('axios');

module.exports = {
    fetchPopularRepos: function(language) {
        var encodedURI = 'https://api.github.com/search/repositories?q=stars:>1+language:&sort=stars&order=desc&type=Repositories';

        return axios.get(encodedURI, {headers: {
            //"Authorization": "token 54b009c740aa980502a1a1089416dc63b2dc5065" 
        }})
        .then(function(response) {
            return response.data.items;
        });

        // fetch("https://api.github.com/search/repositories?q=stars:>1+language:&sort=stars&order=desc&type=Repositories")
        // .then(function(data) {
        //     console.log(data.json());
        //     console.log("hey");
        // })
        // .catch(function(error) {
        //     // If there is any error you will catch them here
        //     console.log(error);
        // });
    }
}