import { useState } from 'react';
import './App.css';
import quotes from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Quote {
  quote: string;
  author: string;
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128 * 0);
  const green = Math.floor(Math.random() * 128 );
  const blue = Math.floor(Math.random() * 128 );

  return `rgb(${red},${green},${blue})`; 
};

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote()); // Fix: Call getRandomQuote() to get a new quote
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomColor }}>
      <div id="quote-box" >
        <div className="quote-content" style={{ backgroundColor: randomColor }}>
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text" style={{ color: `${randomColor}`, opacity: 1 }}>{quote.quote}</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          <h4 id="author" style={{ color: randomColor }}>***- {quote.author} -***</h4>
        </div>
        <div className="buttons" >
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-code"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor }}>
            Change Quote
          </button>
        </div>
        
      </div>
      <div className="footer" style={{ backgroundColor: randomColor }}>
        <h5>©2023...Josefwambua</h5>
      </div>
    </div>
  );

}

export default App;
