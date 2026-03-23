# BlogApp
Un site web permentant de faire des blogs et les posters pour tous. 
# Blog API (Node.js + Express + MySQL)

## Description
API REST simple pour gérer des articles de blog avec les opérations CRUD :
création, lecture, mise à jour, suppression et recherche.

---

## Installation

### 1. Cloner le projet
git clone <url_du_projet>

### 2. Installer les dépendances
npm install

### 3. Configurer MySQL (XAMPP)

Créer la base :

CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    tags VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 4. Lancer le serveur
npm start

Serveur disponible sur :
http://localhost:3000

---

## Endpoints

### 1. Récupérer tous les articles
GET /api/articles

### 2. Récupérer un article par ID
GET /api/articles/:id

### 3. Créer un article
POST /api/articles

Body JSON :
{
  "title": "Titre",
  "content": "Contenu",
  "author": "Auteur",
  "category": "Tech",
  "tags": "nodejs,api"
}

### 4. Mettre à jour un article
PUT /api/articles/:id

### 5. Supprimer un article
DELETE /api/articles/:id

### 6. Rechercher un article
GET /api/articles/search?query=texte

---

## Exemples d’utilisation

### Créer un article
POST http://localhost:3000/api/articles

### Obtenir tous les articles
GET http://localhost:3000/api/articles

### Recherche
GET http://localhost:3000/api/articles/search?query=node

---

## Technologies utilisées

- Node.js
- Express.js
- MySQL (XAMPP)
- HTML / CSS / JavaScript

---

## Auteur
Samuel
