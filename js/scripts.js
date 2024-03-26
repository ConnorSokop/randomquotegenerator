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
            quote: "",
            author: ""
        }
    ];

    let arrayIndex = Math.floor(Math.random * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}


// document.getElementById("generate").addEventListener('click', generateQuote);