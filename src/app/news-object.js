"use client";

function Multimedia({multimedia}) {
    if (multimedia != null && multimedia != undefined && multimedia.length)
      return <img src={multimedia[multimedia.length - 1].url} alt="News Image" className="news-image"/>
}

function NewsDetails({news}) {
  if ((news.title || news.abstract) && news.url) {
    if (news.multimedia == null || news.multimedia == undefined || !news.multimedia.length) {
      return <div className="solo-news-details">
              <p className="news-title"><b>{news.title}</b></p>
              <p className="news-text news-abstract">{news.abstract}</p>
              <p className="news-text">{news.byline}</p>
              <p className="news-text"><a href={news.url}>Source</a></p>
            </div>
    }
    else {
      return <div className="news-details">
              <p className="news-title"><b>{news.title}</b></p>
              <p className="news-text news-abstract">{news.abstract}</p>
              <p className="news-text">{news.byline}</p>
              <p className="news-text"><a href={news.url}>Source</a></p>
            </div>
    }
  }
}

export default function NewsObject(info) {
  return (
    <div className="news-object">
      <Multimedia multimedia={info.news.multimedia}/>
      <NewsDetails news={info.news}/>
    </div>
  );
}