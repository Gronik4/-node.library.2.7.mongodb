const express = require('express');
const router = express.Router();
const Book = require('../Moidel/books');

router.get('/', async(req, res)=> {
  try{
    const books = await Book.find().select(-__v);
    res.json(books);
  } catch(e) {
    res.status(500).json(e);
  }
});

router.post('/create', async (req, res)=> {
  const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body;
  const newBook = new Book(id, title, description, authors, favorite, fileCover, fileName, fileBook);
  try {
    await newBook.save();
    res.json(newBook);
  } catch(e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async(req, res)=> {
  const{id} = req.params;
  try {
    const book = await Book.findById(id).select('-__v');
    res.json(book);
  } catch(e) {
    res.status(500).json(e);
  }
});

router.put('/:id', async(req,res)=> {
  const{id} = req.params;
  const {title, description, authors, favorite, fileCover, fileName, fileBoo} = req.body;
  try {
    await Book.findByIdAndUpdate(id, {
      title, 
      description, 
      authors, 
      favorite, 
      fileCover, 
      fileName, 
      fileBoo
    });
    res.redirect(`/book/${id}`);
  } catch(e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', async(req, res)=> {
  const{id} = req.params;
  try {
    await Book.deleteOne({_id: id});
    res.json({message: `Book with id = ${id}  deleted successfully`});
  } catch(e) {
    res.status(500).json(e);
  }
});

module.exports = router;
