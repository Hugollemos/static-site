const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor web!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor web está rodando em http://localhost:${port}`);
});
