
const express = require('express');
const app = express();
const port = 3001;

app.get('/products', (req, res) => {
  res.end(`${req.method} запрос по адресу /products был выполнен успешно`);
});

app.post('/products', (req, res) => {
  res.end(`${req.method} запрос по адресу /products был выполнен успешно`);
});

app.put('/products', (req, res) => {
  res.end(`${req.method} запрос по адресу /products был выполнен успешно`);
});

app.delete('/products', (req, res) => {
  res.end(`${req.method} запрос по адресу /products был выполнен успешно`);
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});