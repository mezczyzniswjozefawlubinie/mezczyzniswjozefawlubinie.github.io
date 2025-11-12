"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "../theme";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";

type Post = {
  title: string;
  author: string;
  date: string;
  content: string;
};

export default function PostsReader({ posts }: { posts: Post[] }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <main className="center-column-about margin-top">
        <Typography variant="h3" component="h3" gutterBottom align="center">
          Aktualności
        </Typography>
        <article className="blog-post">
          <Typography variant="h5" component="h5" gutterBottom>
            Spotkania MŚJ w 2025 roku
          </Typography>
          <p className="blog-post-meta">07 listopada 2025</p>
          <p className="blog-post-content">
            Serdecznie zapraszamy na pozostałe spotkania Mężczyzn Świętego
            Józefa w 2025 roku w terminach:
          </p>
          <br />
          <div className="blog-post-list">
          <ul>
            <li>12 listopada, 19:00</li>
            <li>10 grudnia, 19:00</li>
          </ul>
          </div>
          <br />
          <p className="blog-post-content">
            Spotkania odbywają się w budynku byłego gimnazjum przy parafii św.
            Jana Bosko w Lubinie, ul. Jana Pawła II 58.
            <br />
            <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.0776829032636!2d16.18525752439985!3d51.4013923928076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f5bd2a96151%3A0xed571c5912dc849b!2sJana%20Paw%C5%82a%20II%2058%2C%2059-300%20Lubin!5e1!3m2!1spl!2spl!4v1762543526743!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
          <div className="blog-post-content" />
        </article>                
      </main>
    </ThemeProvider>
  );
}

