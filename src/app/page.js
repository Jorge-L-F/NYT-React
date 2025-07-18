"use client";

//import Image from "next/image";
//import styles from "./page.module.css";
import { useState } from "react";
import { fetchFeed } from "./server";

export default function Home() {
  const [title] = useState('NYT Feed');
  const [newspaper, setNews] = useState([]);
  const [errorResponse, setError] = useState(null);

  function fetchNews() {
    const data = fetchFeed();
    if (data instanceof Array) {
      setNews(data);
      setError(null);
    }
    else if (data instanceof Object) {
      errorMessage = "There was a problem while fetching the articles from NYT. Try refreshing the page.\n";
      if (data.response) {
        errorMessage += data.response.data + "\n" + data.errorResponse.status + "\n" + data.errorResponse.headers;
      }
      else if (data.request)
        errorMessage += data.request;
      else
        errorMessage += data.message;
    }

    setError(errorMessage);
  };

  return (
    <div className="feed-container">
      <button onClick={fetchNews} className="fetch-button"><b>Fetch News</b></button>
      <div className="scrollable-box">
        
      </div>
    </div>
    /*<div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>*/
  );
}
