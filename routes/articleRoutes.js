const express = require('express');
const router = express.Router();

// Import du controller
const articleController = require('../controllers/articleController');


/*
========================================
CRUD ROUTES
========================================
*/

// CREATE
router.post('/', articleController.createArticle);

// READ ALL
router.get('/', articleController.getAllArticles);

// SEARCH (IMPORTANT : AVANT :id)
router.get('/search', articleController.searchArticles);

// READ ONE
router.get('/:id', articleController.getArticleById);

// UPDATE
router.put('/:id', articleController.updateArticle);

// DELETE
router.delete('/:id', articleController.deleteArticle);


module.exports = router;