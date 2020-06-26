import React from "react";
const RandomQuote = (props) => {
  return (
    <div className="quotes-div">
      <p className="quote">{props.quotesData.quote}</p>
      <h5 className="quote">{props.quotesData.author}</h5>
    </div>
  );
};
export default RandomQuote;
