const users = require("../data/user.json");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthenticationController {
  prisma = new PrismaClient();
  login = async (req, res) => {
    try {
      console.log(req.body);
      const { username, password } = req.body;
      if (!username || !password) {
        throw new Error("Missing username and/or password");
      }

      const user = await this.prisma.user.findUnique({
        where: { email: username },
      });

      if (!user) {
        throw new Error("Incorrect username and password");
      }

      const isMatch = await bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        throw new Error("Incorrect username and password");
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        "#topSecret"
      );
      res.json({ user: user, token });
    } catch (error) {
      res.json({ error_message: error.message });
    }
  };
}

module.exports = new AuthenticationController();
