function generateQuote() {
    const quotes = [
        {
            quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
            author: "Micheal Scott, Season 5; 'Sress Relief'"
        },
        {
            quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
            author: "Micheal Scott, Season 2;'The fight'"
        },
        {
            quote: "I'm not a millionaire. I thought I would be by the time I was 30, but I wasn't even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.",
            author: "Michael Scott, Season 6; 'Scott’s Tots'"
        },
        {
            quote: "Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So Jim, is actually my friend. But, because he is his own worst enemy, the enemy of my friend is my enemy so actually Jim is my enemy.",
            author: "Dwight Schrute, Season 6; 'Koi Pond'"
        },
        {
            quote: "As it turns out, you can't just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it.",
            author: "Michael Scott, Season 5; 'Moroccan Christmas'"
        },
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}


document.getElementById("generate").addEventListener("click", generateQuote);