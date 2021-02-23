
const axios = require('axios');
class Users {
  static all() {
    return axios.get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5").then(resp => resp.data);

  }
}

module.exports  = Users;