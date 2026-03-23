const API_URL = "http://localhost:3000/api/articles";

/*
========================================
LOAD ALL ARTICLES
========================================
*/
function loadArticles() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            displayArticles(data);
        });
}


/*
========================================
DISPLAY
========================================
*/
function displayArticles(articles) {
    const container = document.getElementById("articles");
    container.innerHTML = "";

    articles.forEach(article => {
        const div = document.createElement("div");
        div.classList.add("article");

        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <small>Par ${article.author}</small>

            <div class="actions">
                <button onclick="deleteArticle(${article.id})">Supprimer</button>
            </div>
        `;

        container.appendChild(div);
    });
}


/*
========================================
CREATE
========================================
*/
function createArticle() {
    const data = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value,
        tags: document.getElementById("tags").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        loadArticles();
    });
}


/*
========================================
DELETE
========================================
*/
function deleteArticle(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        loadArticles();
    });
}


/*
========================================
SEARCH
========================================
*/
function searchArticles() {
    const query = document.getElementById("search").value;

    fetch(`${API_URL}/search?query=${query}`)
        .then(res => res.json())
        .then(data => {
            displayArticles(data);
        });
}


// Charger au démarrage
loadArticles();