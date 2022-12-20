const quotes = [
    { quote: "As you start to walk on the way, the way appears.", author: "Rumi" },
    { quote: "The best time to plant a tree was 20 years ago.\nThe second best time is now.", author: "Proverb" },
    { quote: "Anybody who preserve the ability to recognize beauty\nwill never get old", author: "Franz Kafka" },
    { quote: "Only through suffering can we find ourselves", author: "Fyodor Dostoevsky" },
    { quote: "Don't be afraid to give up the good to go for the best.", author: "John D. Rockefeller" },
    { quote: "It is not true that people stop pursuing dreams \nbecause they grow old they grow old because they stop pursuing dreams.", author: "Gabriel Garcia Marzuez" },
    { quote: "Music in the soul can be heard by the universe.", author: "Lao Tzu"},
    { quote: "Do not fear failure but rather fear not trying.", author: "Roy T. Bennet"},
    { quote: "God is a comedian playing to an audience that is too\nafraid to laugh.", author: "Voltaire"},
    { quote: "The first step, my son, which one makes in the world,\nis the one on which depends the rest of our days.", author: "Voltaire"},
    { quote: "Don’t you wonder sometimes, what might have\nhappened if you tried?", author: "Kazuo Ishiguro"},
    { quote: "The purpose of life is not\nto be happy. It is to be useful, to be honorable, to be compassionate, \nto have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson"},
    { quote: "My soul is a hidden orchestra; I know not what\ninstruments, what fiddlestrings and harps,\ndrums and tamboura I sound and clash inside myself.\nAll I hear is the symphony.", author: "Fernando Pessoa"},
    { quote: "The purpose of life is not to be happy. It is to be useful, \nto be honorable, \nto be compassionate, \nto have it make some difference that you have lived and lived well.", author: "Miyamoto Musashi"},
    { quote: "If a thing is worth doing, it is worth doing well. If it is worth having, it is worth waiting for.\nIf it is worth attaining, it is worth fighting for. If it is worth experiencing, it is worth putting aside time for.", author: "Oscar Wilde"}

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
  
