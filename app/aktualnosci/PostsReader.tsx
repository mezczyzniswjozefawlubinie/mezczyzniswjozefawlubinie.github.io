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

        <article className="blog-post">
          <Typography variant="h5" component="h5" gutterBottom>
            Oblężenie Jasnej Góry 2025
          </Typography>
          <p className="blog-post-meta">19.09.2025</p>
          <div className="blog-post-content">
            Bracie
            <br />
            <br />
            Zapraszamy Cię na wspólny wyjazd na Męskie Oblężenie Jasnej Góry.
            <br />
            Już 27. września 2025 r. (sobota) odbędzie się w Częstochowie IX
            edycja Oblężenia zatytułowana „Mężczyzna Nadziei”.
            <br />
            Współorganizatorami jest wiele męskich grup katolickich a
            koordynatorem są „Mężczyźni Świętego Józefa”. Jako lubińska grupa
            Mężczyzn Świętego Józefa organizujemy wyjazd na to wydarzenie by dać
            sobie i innym szansę na umocnienie wiary i odkrycie czym jest
            chrześcijańska nadzieja.
            <br />
            <br />
            <b>
              Zapisy prowadzimy do 23. września pod numerem telefonu: 534 692
              253.
            </b>
            <br />
            <br />
            <img
              src="/img/Oblezenie2025.jpg"
              alt="Oblężenie 2025"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <br />
            Szacowany koszt: 100 zł
            <br />
            Wyjazd w sobotę g. 6.30
            <br />
            Powrót w nocy sobota/niedziela ok. g.1.00.
            <br />
            <br />
            Nie wahaj się! Dołącz do nas! Warto być, by razem z setkami mężczyzn
            na Jasnej Górze umocnić się w wierze i nadziei, odnowić śluby
            jasnogórskie i doświadczyć, że Kościół w Polsce potrzebuje mężczyzn
            niosących nadzieję.
            <br />
            <br />
            Mężczyźni Świętego Józefa w Lubinie
            <br />
            <a
              className="underlined-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/msjlubin"
            >
              https://www.facebook.com/msjlubin
            </a>
            <br />
            <a
              className="underlined-link"
              target="_blank"
              rel="noopener noreferrer"
              href="www.oblezenie.pl"
            >
              www.oblezenie.pl
            </a>
            <br />
            <br />
            <h1>
              Dlaczego warto poświęcić czas na Męskie Oblężenie na Jasnej Górze?
            </h1>
            <br />
            <br />
            <b>1. Bo nadzieja to więcej niż optymizm</b>
            <br />
            Warsztaty pomagają zrozumieć, czym naprawdę jest chrześcijańska
            nadzieja – nie jako chwilowe pocieszenie, ale jako głęboka siła
            duchowa, zakorzeniona w wierze i zmartwychwstaniu Chrystusa. To
            nadzieja, która zbawia i przemienia życie.
            <br />
            <br />
            <b>2. Bo mężczyzna potrzebuje duchowego wzmocnienia</b>
            <br />
            Codzienność często obciąża mężczyzn odpowiedzialnością, samotnością
            i zmęczeniem. Warsztaty oraz wspólne spotkanie na Jasnej Górze to
            czas, by zaczerpnąć u źródła – w modlitwie, wspólocie, świadectwie i
            adoracji.
            <br />
            <br />
            <b>3. Bo wiara rodzi odwagę i sens</b>
            <br />
            Warsztaty dotykają tematów, które realnie wzmacniają: cierpienie,
            wspólnota, modlitwa, niebo. Uczą, jak znaleźć sens w trudnościach i
            jak wiara daje siłę do przezwyciężania życiowych burz.
            <br />
            <br />
            <b>4. Bo spotkanie z innymi mężczyznami buduje</b>
            <br />
            Oblężenie gromadzi tysiące mężczyzn z całej Polski, którzy
            przyjeżdżają, by razem się modlić, dzielić doświadczeniem i budować
            Kościół. To przestrzeń braterstwa i jedności, której nie da się
            zastąpić.
            <br />
            <br />
            <b>5. Bo to czas dla ojca i syna, brata i przyjaciela</b>
            <br />
            Wspólny wyjazd na warsztaty i na Jasną Górę to bezcenny czas
            budowania relacji. To świadectwo wiary przekazywane kolejnemu
            pokoleniu – przez obecność, słowo i modlitwę.
            <br />
            <br />
            <b>6. Bo nadzieja jest potrzebna dziś bardziej niż kiedykolwiek</b>
            <br />
            Świat przeżywa kryzys sensu, a wielu mężczyzn czuje się zagubionych.
            Warsztaty i Oblężenie dają prawdziwe odpowiedzi, duchowe
            zakorzenienie i nowy kierunek.
            <br />
            <br />
            <b>7. Bo to czas działania Ducha Świętego</b>
            <br />
            To nie tylko wydarzenie – to czas łaski. Duch Święty działa tam,
            gdzie ludzie otwierają serca. Wspólna adoracja, Eucharystia i
            modlitwa czynią z Jasnej Góry przestrzeń odnowy i misji.
          </div>
        </article>

        {posts.map((post, index) => (
          <article className="blog-post" key={index}>
            <Typography variant="h5" component="h5" gutterBottom>
              {post.title}
            </Typography>
            {/* <p className="blog-post-meta">
              Autor: {post.author} | Data: {post.date}
            </p> */}
            <p className="blog-post-meta">{post.date}</p>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        ))}
      </main>
    </ThemeProvider>
  );
}
