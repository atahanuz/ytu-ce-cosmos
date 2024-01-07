document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var newsData = [
        { title: "GPT-7", date: "2024-01-06", content: "We're launching our newest GPT model, so far ahead of the rest that we could only name it GPT-7 !" },
        { title: "New Investment to COSMOS", date: "2024-01-05", content: "We have a received a 10B$ investment from OpenAi, Google and Nvidia and an anonymous venture capital investor." },
        { title: "New Article from COSMOS", date: "2024-01-04", content: "Our groundbreaking new article is published and it has already been cited 1000 times." },

        // Add more news items here
    ];

    var newsContainer = document.getElementById('news-container');

    newsData.forEach(function(news, index) {
        var newsItem = document.createElement('div');
        newsItem.style = 'padding: 10px; border-bottom: 1px solid #eee;' + (index === newsData.length - 1 ? ' border-bottom: none;' : '');

        var title = document.createElement('div');
        title.style = 'font-size: 18px; color: #0056b3; font-weight: bold; margin-bottom: 5px;';
        title.textContent = news.title;

        var date = document.createElement('div');
        date.style = 'font-size: 12px; color: #888888; margin-bottom: 5px;';
        date.textContent = new Date(news.date).toLocaleDateString();

        var content = document.createElement('div');
        content.style = 'font-size: 14px; color: #333; line-height: 1.6;';
        content.textContent = news.content;

        newsItem.appendChild(title);
        newsItem.appendChild(date);
        newsItem.appendChild(content);
        newsContainer.appendChild(newsItem);
    });
});

