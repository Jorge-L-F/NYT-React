"use client";

function validateMultimedia(multimedia) {
  return multimedia != null && multimedia != undefined && multimedia.length;
}

function validateDetails(news) {
  return (news.title || news.abstract) && news.byline && typeof news.byline == "string" && news.byline.trim().length > 3 && news.byline.trim().startsWith("By ") && news.url;
}

function Multimedia({multimedia}) {
  return (<img src={multimedia[multimedia.length - 1].url} alt="News Image" className="news-image"/>);
}

function NewsDetails({news}) {
  return (
    <div className="news-details">
      <p className="news-title"><b>{news.title}</b></p>
      <p className="news-text news-abstract">{news.abstract}</p>
      <p className="news-text">{news.byline}</p>
      <p className="news-text"><a href={news.url}>Source</a></p>
    </div>
  );
}

function SoloNewsDetails({news}) {
  return (
    <div className="solo-news-details">
      <p className="news-title"><b>{news.title}</b></p>
      <p className="news-text news-abstract">{news.abstract}</p>
      <p className="news-text">{news.byline}</p>
      <p className="news-text"><a href={news.url}>Source</a></p>
    </div>
  );
}

export default function NewsObject(info) {
  let news = info.news;
  let multimedia = news.multimedia;
  if (validateDetails(news)) {
    if (validateMultimedia(multimedia))
      return (
        <div className="news-object">
          <Multimedia multimedia={multimedia}/>
          <NewsDetails news={news}/>
        </div>
      );
    else
      return (
        <div className="news-object">
          <SoloNewsDetails news={news}/>
        </div>
      );
  }
  else
    return (<div className="news-object null"/>);
}