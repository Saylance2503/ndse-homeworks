const express = require('express');
const router = express.Router();
const multer = require('multer');

let books = [];

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

router.post('/', upload.single('fileBook'), (req, res) => {
    const newBook = {
        id: generateId(),
        ...req.body,
        fileBook: req.file.filename
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id === bookId);

    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    books = books.filter(b => b.id !== bookId);
    res.send('ok');
});

router.get('/:id/download', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);

    if (book && book.fileBook) {
        const filePath = `uploads/${book.fileBook}`;
        res.download(filePath, book.fileName || 'book_file');
    } else {
        res.status(404).send('Book file not found');
    }
});

module.exports = router;
