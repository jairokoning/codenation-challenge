const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.codenation.dev/v1/challenge/dev-ps'    
})

module.exports = api;

// module.exports = function api(){
//   return axios.create({
//     baseURL: 'https://api.codenation.dev/v1/challenge/dev-ps'    
//   })
// }
