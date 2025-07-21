const {Schema, model} = require('mongoose');
const { type } = require('os');
const {nanoid} = require('nanoid');

const booksSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: nanoid(5)
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  favorite: {
    type: String,
    required: true,
    default: '5'
  },
  fileCover: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  }
});

module.exports = model('Libr', booksSchema);