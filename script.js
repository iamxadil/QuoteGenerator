//Selectors
const quoteH3 = document.querySelector("h3");
const writer = document.querySelector("h4");
const generatBtn = document.querySelector("button");
let quotes = [
  {
    quote: "“That which does not kill us makes us stronger.”",
    writer: "― Friedrich Nietzsche",
  },

  {
    quote:
      "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
    writer: "― Friedrich Nietzsche",
  },

  {
    quote:
      "“Civilization began the first time an angry person cast a word instead of a rock.”",
    writer: "― Sigmund Freud",
  },
  {
    quote:
      "“Right or wrong, it's very pleasant to break something from time to time.”",
    writer: "― Fyodor Dostoevsky",
  },
  {
    quote: "“I love you and that’s the beginning and end of everything.”",
    writer: "– F. Scott Fitzgerald",
  },
  {
    quote:
      "“I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.”",
    writer: "― Leo Christopher",
  },
  {
    quote: "“There is nothing permanent except change.”",
    writer: "― Heraclitus",
  },
  {
    quote:
      "“We are such stuff as dreams are made on, and our little life is rounded with a sleep.”",
    writer: "― William Shakespeare",
  },
  {
    quote: "“Not all those who wander are lost.”",
    writer: "― J.R.R. Tolkein",
  },
];

generatBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random].quote;
  let randomWriter = quotes[random].writer;
  quoteH3.innerHTML = randomQuote;
  writer.innerHTML = randomWriter;
});
