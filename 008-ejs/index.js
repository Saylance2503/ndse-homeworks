const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use('/api/books', upload.single('fileBook'));

app.use('/api/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
