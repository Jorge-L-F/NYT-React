"use client";

function validateMultimedia(multimedia) {
  return multimedia != null && multimedia != undefined && multimedia.length;
}

function validateDetails(news) {
  return (news.title || news.abstract) && news.byline && typeof news.byline == "string" && news.byline.trim().length > 3 && news.byline.trim().startsWith("By ") && news.url;
}

function validateEntry(news) {
  return validateMultimedia(news.multimedia) && validateDetails(news);
}

function Multimedia({news}) {
    if (validateEntry(news))
      return (<img src={news.multimedia[news.multimedia.length - 1].url} alt="News Image" className="news-image"/>);
}

function NewsDetails({news}) {
  if (validateDetails(news)) {
    if (!validateMultimedia(news.multimedia)) {
      return (
        <div className="solo-news-details">
          <p className="news-title"><b>{news.title}</b></p>
          <p className="news-text news-abstract">{news.abstract}</p>
          <p className="news-text">{news.byline}</p>
          <p className="news-text"><a href={news.url}>Source</a></p>
        </div>
      );
    }
    else {
      return (
        <div className="news-details">
          <p className="news-title"><b>{news.title}</b></p>
          <p className="news-text news-abstract">{news.abstract}</p>
          <p className="news-text">{news.byline}</p>
          <p className="news-text"><a href={news.url}>Source</a></p>
        </div>
      );
    }
  }
}

export default function NewsObject(info) {
  return (
    <div className="news-object">
      <Multimedia news={info.news}/>
      <NewsDetails news={info.news}/>
    </div>
  );
}