// users.test.js
const axios = require('axios');
//  import Users from "./user"
 const Users = require('./user');

jest.mock('axios');

test('should fetch users', () => {
  const users = [{
    albumId:2,
    id: 1000,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/60/9"
  }];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(users));
});