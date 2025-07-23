import "./style.css";

export const metadata = {
  title: "NYT Feed",
  description: "News Feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body>
        <div className="navigation-bar">
          <b className="title">{metadata.title}</b>
        </div>
        {children}
        <footer>
          <a href="https://developer.nytimes.com/">
            <img src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344" className="logo large"/>
          </a>
          <a href="https://developer.nytimes.com/">
            <img src="https://developer.nytimes.com/files/poweredby_nytimes_150a.png?v=1583354208339" className="logo small"/>
          </a>
        </footer>
      </body>
    </html>
  );
}
