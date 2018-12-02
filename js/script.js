/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//An array of quotes with 'quote', 'sorce', and optional 'year' proberty is being created.
//Exceeds Expectations: Objects in array include additional properties, such as categorization tags.

const quotes = [
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    year: "2013",
    positivity: "positive"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    year: "1957",
    positivity: "neutral"
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source: "Helen Keller",
    year: "1929",
    positivity: "neutral"
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source: "Chinmayananda Saraswati",
    positivity: "positive"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    source: "Anthony Robbins",
    positivity: "neutral"
  }
];

//Function returns a random quote from quotes array
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  if (quotes[randomNumber].quote == document.querySelector('.quote').textContent) {   //condition to prevent to insert same quote two times in a row
    return getRandomQuote();
  }
  return quotes[randomNumber];
};

//Exceeds Expectations: Quotes change automatically after a certain amount of time passes. Background color changes each time the quote changes.
//Random color generator.
const setRandomBackgroudColor = () => {
  let randomColorHex = Math.floor(Math.random()*16777215).toString(16);
  if (randomColorHex > 'f8f8f8') {
    document.querySelector('body').style.color = '##00c500';
  }

  document.querySelector('body').style.textShadow = '2px 2px #000';
  document.querySelector('body').style.backgroundColor = `#${randomColorHex}`;
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
  stringHTML += `<span class="positivity">${randomQuote.positivity}</span></p>`;

  setRandomBackgroudColor();
  document.getElementById('quote-box').innerHTML = stringHTML;

  //Resets printQuote execution repetition
  clearInterval(autoPrintQuote);
  autoPrintQuote = setInterval(printQuote, 7000);
};

//Executes printQuote every 7 sec
let autoPrintQuote = setInterval(printQuote, 7000);

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
