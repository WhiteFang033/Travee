const GnewsApiKey = 'de2f697a3f52a9265a1afb18668cd110';
const GnewsApiUrl = `https://newsapi.org/v2/everything?q=chennai&sortBy=popularity&from=2024-1-25&apiKey=18b9df7efe454ebfb6a44bf8c1db84b1`;
const newsContainer = document.getElementById('newsContainer')

fetch(GnewsApiUrl)
    .then(response => {
        const data = response.json();
        return data;
    })
    .then(result => {
        console.log(result);
    for(let i = 0; i<result.articles.length;i++)
    {
        newsContainer.insertAdjacentHTML('beforeend',`
        <div class="newsCard">
                <div class="title"><a href="${result.articles[i].url}" target="_blank">${result.articles[i].title}</a></div>
                <div class="description">${result.articles[i].description}</div>
                <div class="source">${result.articles[i].source.name}</div>
        `)
    }
    })

