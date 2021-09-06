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
  let fetchedNews = "";
  console.log(results);

  results.forEach((result) => {
    let newsSection = result.sectionName;
    let newsDate = result.webPublicationDate;
    let newsURL = result.webUrl;
    let newsTitle = result.webTitle;

    fetchedNews += `
    <div class="news">
    <p>${newsSection}</p>
    <p>${newsDate}</p>
    <a href ="${newsURL}" target ="_blank">${newsTitle}</a>

    </div>
    `;

    newsContainer.innerHTML = fetchedNews;
  });
}
