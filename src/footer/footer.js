import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      Built by{" "}
      <a
        href="https://github.com/StellaLunaSousa"
        target="_blank"
        rel="noreferrer nofollow"
      >
        Stella Luna Sousa{" "}
      </a>
      | Code available on{" "}
      <a
        href="https://github.com/StellaLunaSousa/weather-search"
        target="_blank"
        rel="noreferrer nofollow"
      >
        GitHub{" "}
      </a>
      | Hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        Netlify
      </a>
    </footer>
  );
}
