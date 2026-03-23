const db = require('../config/db');

// Création d'un article
exports.createArticle = (data, callback) => {
    const sql = `
        INSERT INTO articles (title, content, author, category, tags)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [data.title, data.content, data.author, data.category, data.tags],
        callback
    );
};

// Récupérer tous les articles
exports.getAllArticles = (callback) => {
    db.query("SELECT * FROM articles", callback);
};

// Récupérer un article par ID
exports.getArticleById = (id, callback) => {
    db.query("SELECT * FROM articles WHERE id = ?", [id], callback);
};

// Mise à jour
exports.updateArticle = (id, data, callback) => {
    const sql = `
        UPDATE articles 
        SET title=?, content=?, author=?, category=?, tags=?
        WHERE id=?
    `;

    db.query(
        sql,
        [data.title, data.content, data.author, data.category, data.tags, id],
        callback
    );
};

// Suppression
exports.deleteArticle = (id, callback) => {
    db.query("DELETE FROM articles WHERE id = ?", [id], callback);
};

/*
========================================
SEARCH ARTICLES
========================================
*/
exports.searchArticles = (query, callback) => {
    const sql = `
        SELECT * FROM articles
        WHERE title LIKE ? OR content LIKE ?
    `;

    const searchValue = `%${query}%`;

    db.query(sql, [searchValue, searchValue], callback);
};