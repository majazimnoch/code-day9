let description = document.getElementById("description");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let date = document.getElementById("date");

const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=783ad226b2e8489792d6d0e5371d43c6";

let getArticle = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;
      const randomIndex = Math.floor(Math.random() * articles.length);
      const randomArticle = articles[randomIndex];

      if (randomArticle) {
        description.innerText = randomArticle.description;
        author.innerText = randomArticle.author;

        const formatDate = new Date(randomArticle.publishedAt).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });

        date.innerText = formatDate;
      } else {
        console.log("No articles found. Try again.");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
};

window.addEventListener("load", getArticle);
btn.addEventListener("click", getArticle);