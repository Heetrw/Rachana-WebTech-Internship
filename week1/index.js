const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

// Read
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
});

// Create 
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('User created successfully');
  });
});

// Update 
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(query, [name, email, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('User updated successfully');
  });
});

// Delete 
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('User deleted successfully');
  });
});

// Start server
const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
