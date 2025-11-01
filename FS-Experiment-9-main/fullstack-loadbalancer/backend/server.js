
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Load Balanced Backend!' });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
