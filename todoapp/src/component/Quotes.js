import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random/10")
      .then((res) => res.json())
      .then((quotes) => setQuotes(quotes))
      .then(console.log);
  }, []);

  return (
    <div>
        <h1>10 Quotes</h1>
      {quotes.map((qut) => (
        <div>
           <p className="text-success">{qut.quote}</p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
