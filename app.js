const newsInput = document.querySelector(".news-input");
const form = document.querySelector("form");
const newsContainer = document.querySelector(".news-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchQuery = newsInput.value;
  fetchNews(searchQuery);
});

async function fetchNews(searchQuery) {
  const apiKey = "cf9af74b-6117-4007-8908-80f613299fdc";
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${apiKey}`
  );

  const responseData = await response.json();
  newsResults(responseData.response.results);
}

function newsResults(results) {
    let fetchedNews = 
}