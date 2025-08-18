"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "../theme";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

export default function Onas() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="logo-top-left">
        <Link href="https://diecezja.legnica.pl" passHref rel="noopener noreferrer" target="_blank">
          <Image
            src="/img/herb_diecezji.png"
            alt="Logo"
            width={128}
            height={128}
            priority
          />
        </Link>
      </div>
      <div className="logo-top-right">
        <Image
          src="/img/logo_mezczyzni.png"
          alt="Logo"
          width={256}
          height={256}
          priority
        />
      </div>
      <main className="center-column-about margin-top">
        <Typography variant="h3" component="h3" gutterBottom align="center">
          Wspólnota Mężczyzn św. Józefa w Lubinie
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Kim jesteśmy?
        </Typography>
        <p>
          Jesteśmy grupą mężczyzn, którzy chcą żyć pełnią życia - w prawdzie,
          wierze i odpowiedzialności. Łączy nas pragnienie duchowego wzrostu i
          braterskiego wsparcia. Wzorem dla nas jest św. Józef - mężczyzna
          milczenia, odwagi i zaufania Bogu. Szukamy spełnienia w życiu z Bogiem
          i dla Boga - we wszystkich codziennych czynnościach i obowiązkach.
        </p>
        <br/>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Co robimy?
        </Typography>
        <p>
          Tworzymy przestrzeń, w której każdy mężczyzna może odnaleźć sens,
          pokój, siłę i… radość. Spotykamy się, by wspólnie się modlić,
          rozmawiać, dzielić doświadczeniem i wspierać się nawzajem. Nasze
          działania obejmują:
          <ul className="inline-list">
            <li>
              <b>Spotkania wspólnotowe</b> - odbywają się w{" "}
              <b>
                2. środę miesiąca o godz.19.00 w budynku byłego gimnazjum przy
                parafii św. Jana Bosko w Lubinie, ul. Jana Pawła II 58
              </b>
              . Spotkania mają charakter modlitewno-formacyjny i są otwarte dla
              każdego mężczyzny.
            </li>
            <li>
              <b>Modlitwa i adoracja</b> - wspólnie trwamy przed Panem w ciszy i
              uwielbieniu, ucząc się zaufania i pokory.
            </li>
            <li>
              <b>Rozmowy i dzielenie się</b> - bez oceniania, bez masek. Każdy
              może mówić, każdy może milczeć. Ważne, że jesteśmy razem.
            </li>
            <li>
              <b>Konferencje i warsztaty</b> - uczestniczymy w spotkaniach,
              podczas których goście dzielą się świadectwem życia oraz prowadzą
              nas w tematach duchowych, psychologicznych i rodzinnych.
            </li>
            <li>
              <b>Wyjazdy i rekolekcje</b> - organizujemy dni skupienia i
              weekendowe wyjazdy, które pomagają oderwać się od codzienności i
              spojrzeć na życie z Bożej perspektywy.
            </li>
          </ul>
        </p>
        <br/>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Dla kogo jesteśmy?
        </Typography>
        <p className="quote">
          <i>
            “Natomiast z człowiekiem pobożnym podtrzymuj znajomość, a także z
            tym, o którym wiesz, że strzeże przykazań, którego dusza podobna do
            twojej duszy, i kto, jeślibyś upadł, będzie współczuł tobie.”
          </i>
          <br />
          <span className="quote-source">
            <a
              href="https://biblia.deon.pl/rozdzial.php?id=627"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syr 37, 12
            </a>
          </span>
        </p>
        <p>
          Jeśli takiej wspólnoty poszukujesz - zapraszamy do wysiłku w jej
          współtworzeniu.
        </p>
        <br/>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Dokąd zmierzamy?
        </Typography>
        <p>
          Chcemy być mężczyznami na wzór św. Józefa - wiernymi, odważnymi,
          obecnymi. Pragniemy wzrastać w wierze, odpowiedzialności i miłości.{" "}
        </p>
        <p className="quote">
          <i>
            „Trzy razy w roku ukażą się wszyscy twoi mężczyźni przed obliczem
            Pana, Boga Izraela. Ja bowiem wypędzę narody sprzed ciebie i
            rozszerzę twoje granice, i nikt nie będzie napadał na twój kraj, gdy
            ty trzy razy w roku pójdziesz, aby pokazać się przed obliczem Pana,
            Boga twego.”
          </i>
          <br />
          <span className="quote-source">
            <a
              href="https://biblia.deon.pl/rozdzial.php?id=85"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wj 34,23-24
            </a>
          </span>
        </p>
        <p>
          Zapraszamy zarówno mężczyzn „poszukujących swojego miejsca w Kościele”
          jak tych, którzy uważają się za „poszukujących w wierze”.
        </p>
        <br/>
        <p>SZERZEJ:
            <ul className="inline-list">
            <li><a target="_blank"
              rel="noopener noreferrer" href="http://www.mezczyzni.net">Strona Stowarzyszenia Mężczyzn św.Józefa</a></li>
            <li><a target="_blank"
              rel="noopener noreferrer" href="http://www.legnica.fm/pielgrzymka-legnicka/54403-wspolnota-sw-jozefa-na-pielgrzymkowym-szlaku">Wywiad z nami w czasie ubiegłorocznej pielgrzymki na Jasną Górę</a></li>
            </ul>
</p>

      </main>
    </ThemeProvider>
  );
}
