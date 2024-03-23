const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Rota para retornar os nomes dos líderes
app.get('/leaders', (req, res) => {
  const leaders = [
    { name: 'Líder 1' },
    { name: 'Líder 2' },
    { name: 'Líder 3' }
  ];
  res.json({ leaders });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
