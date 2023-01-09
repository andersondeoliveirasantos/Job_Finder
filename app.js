const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Express is running on the port ${PORT}`);
})

// db connection
db
  .authenticate()
  .then(() => {
    console.log('Connected with the bank successfully'); // Conectou com o banco com sucesso
  })
  .catch(err => {
    console.log('There was an error connecting', err) // Ocorreu um erro ao conectar
  });

// Rotes
app.get('/', (req, res) => {
  res.send("It's working 02")
})
