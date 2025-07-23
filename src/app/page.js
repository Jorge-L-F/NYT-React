"use client";

import { useState, lazy } from "react";

const NewsObject = lazy(() => import("./news-object"));

function InitialMessage({newspaper, errorResponse}) {
  if (!newspaper.length && !errorResponse)
    return <p className="initial-message">Click the fetch button to fetch the latest news.</p>
}

function ErrorMessage({errorResponse}) {
  if (errorResponse)
    return <p className="error-message">{errorResponse}</p>
}

export default function Home() {
  const [newspaper, setNews] = useState([]);
  const [errorResponse, setError] = useState(null);

  function fetchNews() {
    fetch('/api/news').then(response => response.json()).then(data => {
      if (data instanceof Array) {
        setNews(data);
        setError(null);
      }
      else if (data instanceof String) {
        let errorMessage = "There was a problem while fetching the articles from NYT. Try refreshing the page.\n" + data;
        setError(errorMessage);
      }
    },
    error => {
      const errorMessage = "There was a problem while fetching the articles from NYT. Try refreshing the page.\n" + error;
      setError(errorMessage);
    })
  };

  const news = newspaper.map((news, index) => <NewsObject key={index} news={news}/>);

  return (
    <div className="feed-container">
      <button onClick={fetchNews} className="fetch-button"><b>Fetch News</b></button>
      <div className="scrollable-box">
        <InitialMessage newspaper={newspaper} errorResponse={errorResponse}/>
        <ErrorMessage errorResponse={errorResponse}/>
        {news}
      </div>
    </div>
  );
}
