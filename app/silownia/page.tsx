"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "../theme";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type QuoteObj = {
  quote: string;
  source: string;
  url: string;
}

export default function Silownia() {
  const [quoteObj, setQuoteObj] = useState<QuoteObj | null>(null);
  
  const generateQuote = (): QuoteObj => {
  // Example static quote, you can randomize or fetch as needed
  return {
    quote: "Cała społeczność Izraelitów zgromadziła się w Szilo i wzniesiono tam Namiot Spotkania. Kraj cały był już im poddany. Pozostało jeszcze wśród Izraelitów siedem pokoleń, które nie otrzymały swego dziedzictwa. Rzekł więc Jozue do tych Izraelitów: «Jak długo będziecie zwlekać z objęciem w posiadanie kraju, który dał wam Pan, Bóg waszych ojców?",
    source: "Joz 18,1-3",
    url: "https://biblia.deon.pl/rozdzial.php?id=1130"
  };
}

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
      <main className="center-column-about">
        <Typography variant="h3" component="h3" gutterBottom align="center">
          SiŁOWniA
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Proponowane działania
        </Typography>
        <p>
          Tworzymy przestrzeń, w której każdy mężczyzna może odnaleźć sens,
          pokój, siłę i… radość. Spotykamy się, by wspólnie się modlić,
          rozmawiać, dzielić doświadczeniem i wspierać się nawzajem. Nasze
          działania obejmują:
          <ol className="inline-list-ordered">
            <li>Wylosuj jeden z wybranych przez nas cytatów Pisma Świętego</li>
            <li>Powtarzaj go sobie ze 2-3 razy dziennie przez kilka dni</li>
            <li>Zaobserwuj, czy warto wrócic po następny cytat...
              <div className="generate-quote-button-li">
                
              {quoteObj ? (
                <div className="quote">
                  <i>{quoteObj.quote}</i>
                  <br />
                  <span className="quote-source">
                    <a
                      href={quoteObj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {quoteObj.source}
                    </a>
                  </span>
                </div>
              ) : (
                <Button onClick={() => setQuoteObj(generateQuote())}>
                  Zmierz sie ze Słowem
                </Button>
              )}
              </div>
              </li>
            {/* <li className="generate-quote-button-li">
              
            </li> */}
            <li>
              ...lub zacznij samodzielną przygodę z systematycznym czytaniem
              Biblii.
            </li>
          </ol>
        </p>
        <br />
      </main>
    </ThemeProvider>
  );
}
