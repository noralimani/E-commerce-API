const users = require('../data/user.json');

class AuthenticationController {
    login = (req, res) => {
        try {
            console.log(req.body);
            const { username, password } = req.body;
            if (!username || !password) {
                throw new Error('Missing username and/or password')
            };
    
            const user = users.find(u => u.username === username && u.password === password)
    
            if (!user.length){
                throw new Error('Incorrect username and password')
            }
    
            const token = 'temp_token';
            res.json({ user: user[0], token });
        } catch (error) {
            res.json({ error_message: error.message })
        }
        
    }
}

module.exports = new AuthenticationController()