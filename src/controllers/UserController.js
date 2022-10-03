const User = require('../models/user');
const data = require('../data/user.json');

class UserController {
    index = (req, res) => {
        const users = data.map(e => new User(e))
        res.json({users})
    }
}

module.exports = new UserController()