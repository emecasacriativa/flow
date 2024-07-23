//const User = require('../models/User');

// const UserController = {
//   createUser: async (req, res) => {
//     try {
//       const user = new User(req.body);
//       const createdUser = await user.save();
//       res.status(201).json({ message: 'Usuário criado com sucesso!', data: createdUser });
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao criar usuário!', error: error });
//     }
//   }
// }


const User = require('../models/User');

const UserController = {
  async register(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.json({ user, token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  async logout(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
      await req.user.save();
      res.send('Logout realizado com sucesso');
    } catch (error) {
      res.status(500).send({ error: 'Erro ao realizar logout' });
    }
  },
};
  // ... outros métodos


module.exports = UserController;
