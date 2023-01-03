const { UserList } = require("../data.js")


const resolvers = {
    Query: {
        users() {
            return UserList;

        }
    }
}
module.exports = {resolvers};