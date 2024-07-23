const express = require('express');
const mongoose = require('./config/mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes'); // exemplo de rota

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes); // exemplo de uso de rota

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
