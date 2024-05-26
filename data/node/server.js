const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'Senha123',
  database: 'testedb'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM tabela_exemplo', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
