const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let books = [];

app.use(bodyParser.json());

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

app.post('/api/user/login', (req, res) => {
    res.status(201).json({ id: 1, mail: "test@mail.ru" });
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Книга не найдена');
    }
});

app.post('/api/books', (req, res) => {
    const newBook = {
        id: generateId(),
        ...req.body
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id === bookId);

    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).send('Книга не найдена');
    }
});

app.delete('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    books = books.filter(b => b.id !== bookId);
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
