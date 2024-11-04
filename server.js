const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const cors = require('cors')

app.use(cors()) 

app.use(bodyParser.json());

const users = {
  username: 'admin',
  password: 'admin',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nama dan password harus diisi.' });
  }

  if (users.username === username && users.password === password) {
    res.json({ token: '36314408-1148673ce9bb8b5e60013a0b2', user: username });
  } else {
    res.status(401).json({ message: 'Nama atau password salah.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});