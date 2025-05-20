
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/books', express.static('books'));

app.get('/download/:book', (req, res) => {
  const file = path.join(__dirname, 'books', req.params.book);
  res.download(file);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
