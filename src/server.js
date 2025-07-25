const express = require('express');
const path = require("path");
const mongoose = require('mongoose');

const notPage = require('./Middleware/notPage');

const router = require('./Routes/index');
const bookRouters = require('./Routes/books');

const app = express();
app.use(express.urlencoded());

app.set('views', path.join(__dirname, './views'));// Показывает, что файл index.ejs лежит не в app/view, а в app/src/view
app.set('view engine', 'ejs');

app.use('/', router);
app.use('/book', bookRouters);

app.use(notPage);

async function start(PORT, UrlDB) {
  try {
    await mongoose.connect(UrlDB);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.error(`Error connecting to MongoDB: ${e.message}`);
  }
}
const UrlDB = process.env.URLDB || 'mongodb://localhost:27017/library';
const PORT = process.env.PORT || 3003;
start(PORT, UrlDB);