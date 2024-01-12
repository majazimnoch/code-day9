# Random Daily-News Generator API JS

## Intro
This is the nineth project of my 30-day coding challenge. The project includes following tech stuff: HTML, CSS, JavaScript, REST API.

## Idea
The idea was to build a news generator. I use a public API from <a href="https://newsapi.org/"> News API page </a>. After clicking 'Generate new news' a user can see a new news. Some downsides of this API is that some news are not available, or too long and then they are cut in the middle. Unfortunately, after deploying the web, it appeared that the API doesn't work on public projects.

## Breaking down the code
This JavaScript code fetch and display a random business-related news article on a web page. The code defines four variables (description, author, btn, and date) to store references to specific HTML elements using the getElementById method. It establishes a constant url pointing to the News API, incorporating an API key for authentication.

A named method `getArticle` is defined, leveraging the `fetch` function to retrieve data from the News API. The fetched data is then processed in a series of promise chains. A random article is selected from the response, and its description, author, and publication date are dynamically updated on the webpage using the `innerText` property. The publication date is formatted using the  `toLocaleDateString` method to display it in a month-day-year format.

The  `window.addEventListener`  ensures that the getArticle method is executed when the page loads, initializing it with a random article. Additionally, a click event listener is attached to the button (`btn`), allowing users to refresh and load a new random article by clicking the button.

## Demo
Click <a href="https://silver-piroshki-7c92ba.netlify.app/"> here </a>.