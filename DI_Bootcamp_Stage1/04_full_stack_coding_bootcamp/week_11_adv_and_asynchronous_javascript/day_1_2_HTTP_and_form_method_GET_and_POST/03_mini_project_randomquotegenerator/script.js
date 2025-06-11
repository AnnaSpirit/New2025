// Tableau initial de citations
const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 2, author: "Marilyn Monroe", quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", likes: 0 },
    { id: 3, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", likes: 0 }
];

let lastIndex = null;
let filteredQuotes = [];
let filterIndex = 0;
let filterActive = false;
let currentQuoteObj = null;

document.addEventListener('DOMContentLoaded', () => {
    const quoteSection = document.getElementById('quote-section');
    const countSpacesBtn = document.getElementById('count-spaces-btn');
    const countNoSpacesBtn = document.getElementById('count-no-spaces-btn');
    const countWordsBtn = document.getElementById('count-words-btn');
    const likeBtn = document.getElementById('like-btn');
    const likesCountSpan = document.getElementById('likes-count');
    const newQuoteForm = document.getElementById('new-quote-form');
    const newQuoteInput = document.getElementById('new-quote-input');
    const newAuthorInput = document.getElementById('new-author-input');
    const filterForm = document.getElementById('filter-form');
    const filterAuthorInput = document.getElementById('filter-author-input');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const navigationDiv = document.getElementById('navigation-buttons');
    const generateBtn = document.getElementById('generate-btn');

    function displayQuote() {
        quoteSection.innerHTML = `
        <blockquote>“${currentQuoteObj.quote}”</blockquote>
        <p>— ${currentQuoteObj.author}</p>
      `;
        likesCountSpan.textContent = currentQuoteObj.likes;
    }

    function generateQuote() {
        filterActive = false;
        navigationDiv.style.display = 'none';
        let index;
        do {
            index = Math.floor(Math.random() * quotes.length);
        } while (index === lastIndex && quotes.length > 1);
        lastIndex = index;
        currentQuoteObj = quotes[index];
        displayQuote();
    }

    function filterQuotes(event) {
        event.preventDefault();
        const term = filterAuthorInput.value.trim().toLowerCase();
        // Utilise includes pour détecter noms ou prénoms partiels
        filteredQuotes = quotes.filter(q =>
            q.author.toLowerCase().includes(term)
        );
        if (filteredQuotes.length === 0) {
            alert('No quotes found for this author.');
            return;
        }
        filterActive = true;
        filterIndex = 0;
        currentQuoteObj = filteredQuotes[0];
        displayQuote();
        navigationDiv.style.display = 'block';
    }

    function showPrevious() {
        if (!filterActive) return;
        filterIndex = (filterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        currentQuoteObj = filteredQuotes[filterIndex];
        displayQuote();
    }

    function showNext() {
        if (!filterActive) return;
        filterIndex = (filterIndex + 1) % filteredQuotes.length;
        currentQuoteObj = filteredQuotes[filterIndex];
        displayQuote();
    }

    function countChars(includeSpaces = true) {
        const text = currentQuoteObj.quote;
        return includeSpaces ? text.length : text.replace(/\s+/g, '').length;
    }

    function countWords() {
        return currentQuoteObj.quote.trim().split(/\s+/).length;
    }

    function likeQuote() {
        currentQuoteObj.likes++;
        likesCountSpan.textContent = currentQuoteObj.likes;
    }

    function addQuote(event) {
        event.preventDefault();
        const text = newQuoteInput.value.trim();
        const author = newAuthorInput.value.trim();
        if (!text || !author) return;
        const newId = quotes.length;
        quotes.push({ id: newId, author, quote: text, likes: 0 });
        newQuoteForm.reset();
        alert('New quote added!');
    }

    countSpacesBtn.addEventListener('click', () => alert(`Characters (with spaces): ${countChars(true)}`));
    countNoSpacesBtn.addEventListener('click', () => alert(`Characters (no spaces): ${countChars(false)}`));
    countWordsBtn.addEventListener('click', () => alert(`Word count: ${countWords()}`));
    likeBtn.addEventListener('click', likeQuote);
    newQuoteForm.addEventListener('submit', addQuote);
    filterForm.addEventListener('submit', filterQuotes);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);
    generateBtn.addEventListener('click', generateQuote);

    // Initialisation
    generateQuote();
});