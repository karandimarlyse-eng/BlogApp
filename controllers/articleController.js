const articleModel = require('../models/articleModel');

/*
CREATE ARTICLE (POST)
*/
exports.createArticle = (req, res) => {
    const { title, content, author, category, tags } = req.body;

    // Validation simple (bonne pratique demandée)
    if (!title || !content || !author) {
        return res.status(400).json({
            error: "title, content et author sont obligatoires"
        });
    }

    const newArticle = { title, content, author, category, tags };

    articleModel.createArticle(newArticle, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la création de l'article"
            });
        }

        res.status(201).json({
            message: "Article créé avec succès",
            articleId: result.insertId
        });
    });
};


/*
GET ALL ARTICLES (GET)
*/
exports.getAllArticles = (req, res) => {
    articleModel.getAllArticles((err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la récupération des articles"
            });
        }

        res.status(200).json(results);
    });
};


/*
GET ARTICLE BY ID (GET)
*/
exports.getArticleById = (req, res) => {
    const id = req.params.id;

    articleModel.getArticleById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur serveur"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                error: "Article non trouvé"
            });
        }

        res.status(200).json(results[0]);
    });
};


/*
UPDATE ARTICLE (PUT)
*/
exports.updateArticle = (req, res) => {
    const id = req.params.id;
    const { title, content, author, category, tags } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({
            error: "title, content et author sont obligatoires"
        });
    }

    const updatedArticle = { title, content, author, category, tags };

    articleModel.updateArticle(id, updatedArticle, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la mise à jour"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "Article non trouvé"
            });
        }

        res.status(200).json({
            message: "Article mis à jour avec succès"
        });
    });
};


/*
DELETE ARTICLE (DELETE)
*/
exports.deleteArticle = (req, res) => {
    const id = req.params.id;

    articleModel.deleteArticle(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la suppression"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "Article non trouvé"
            });
        }

        res.status(200).json({
            message: "Article supprimé avec succès"
        });
    });
};


/*
SEARCH ARTICLES (GET /search)
*/
exports.searchArticles = (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({
            error: "Paramètre 'query' requis"
        });
    }

    articleModel.searchArticles(query, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la recherche"
            });
        }

        res.status(200).json(results);
    });
};