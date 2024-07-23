const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/profile', auth, userController.getProfile); // Exemplo de rota protegida

router.post('/register', auth, userController.register);
router.post('/login', auth, userController.login);
// ... outras rotas

module.exports = router;
