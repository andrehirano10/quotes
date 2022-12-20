const quotes = [
    { quote: "As you start to walk on the way, the way appears.", author: "Rumi" },
    { quote: "The best time to plant a tree was 20 years ago. \nThe second best time is now.", author: "Proverb" },
    { quote: "Anybody who preserve the ability to recognize beauty \nwill never get old", author: "Franz Kafka" },
    { quote: "Only through suffering can we find ourselves", author: "Fyodor Dostoevsky" },
    { quote: "Don't be afraid to give up the good to go for the best.", author: "John D. Rockefeller" },
    { quote: "It is not true that people stop pursuing dreams \nbecause they grow old they grow old because they stop pursuing dreams.", author: "Gabriel Garcia Marzuez" },
    { quote: "Music in the soul can be heard by the universe.", author: "Lao Tzu"},
    { quote: "Do not fear failure but rather fear not trying.", author: "Roy T. Bennet"}
  ];
  
  
  // Select the button element
  const button = document.querySelector("button");
  
  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Select the quote element
    const quote = document.querySelector(".quote");
    
    // Select the name element
    const name = document.querySelector(".name");
    
    // Generate a random index for the quotes array
    const index = Math.floor(Math.random() * quotes.length);
    
    // Get the quote object at the random index
    const randomQuote = quotes[index];
    
    // Set the quote text to the random quote
    quote.textContent = randomQuote.quote;
    
    // Set the name text to the random quote's author
    name.textContent = randomQuote.author;
    const copyButton = document.querySelector('.copy');
const quoteText = document.querySelector('.quote');

copyButton.addEventListener('click', () => {
  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  // Set the textarea value to the quote text
  textarea.value = quoteText.textContent;
  // Add the textarea to the body
  document.body.appendChild(textarea);
  // Select the textarea
  textarea.select();
  // Copy the selected text
  document.execCommand('copy');
  // Remove the textarea from the body
  document.body.removeChild(textarea);
  

});

  });
  