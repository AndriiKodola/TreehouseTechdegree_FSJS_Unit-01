/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//An array of quotes with 'quote', 'sorce', and optional 'year' proberty is being created.
const quotes = [
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    year: "2013"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    year: "1957"
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source: "Helen Keller",
    year: "1929"
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source: "Chinmayananda Saraswati",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    source: "Anthony Robbins"
  }
];

//Function returns a random quote from quotes array
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};

//Function inserts properly formatter HTML into index.html (random quote + existing prop).
const printQuote = () => {
  let randomQuote = getRandomQuote();

  let stringHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  if (randomQuote.hasOwnProperty('year')) { //Check for prop existance
    stringHTML += `<span class="year">${randomQuote.year}</span>`;
  }
  stringHTML += '</p>';

  document.getElementById('quote-box').innerHTML = stringHTML;
};

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
