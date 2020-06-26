import React, { useEffect, useState } from "react";
import RandomQuote from "./RandomQuote";
import "./App.css";

function App() {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-naderakhgari-quotes-api.herokuapp.com/quotes/random`)
      .then((res) => res.json())
      .then((data) => setQuotesData(data));
  }, []);

  const newQuote = () => {
    fetch(`https://cyf-naderakhgari-quotes-api.herokuapp.com/quotes/random`)
      .then((res) => res.json())
      .then((data) => setQuotesData(data));
  };

  return (
    <div className="main">
      <div className="App">
        <button onClick={newQuote} className="new-quote-btn">
          New quote
        </button>
      </div>
      <RandomQuote quotesData={quotesData} />
    </div>
  );
}

export default App;
