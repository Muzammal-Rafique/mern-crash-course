const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to MERN Crash Course!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
