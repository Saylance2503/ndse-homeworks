const express = require('express');
const multer = require('multer');
const router = express.Router();

let books = [];

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniquePrefix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.render('index', { books });
});

router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.render('view', { book });
    } else {
        res.status(404).send('Book not found');
    }
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/update/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.render('update', { book });
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
    res.redirect('/books');
});

router.post('/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id === bookId);

    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.redirect('/books');
    } else {
        res.status(404).send('Book not found');
    }
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

router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    books = books.filter(b => b.id !== bookId);
    res.send('ok');
});

module.exports = router;
