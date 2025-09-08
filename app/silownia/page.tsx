"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "../theme";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type QuoteObj = {
  quote: string;
  source: string;
}

export default function Silownia() {
  const [quoteObj, setQuoteObj] = useState<QuoteObj | null>(null);
  const [quotes, setQuotes] = useState<QuoteObj[]>([]);

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);
  
  const generateQuote = (): QuoteObj | null => {
    console.log("Quotes")
    console.log(quotes)

    if (quotes.length === 0) return null;
    const idx = Math.floor(Math.random() * quotes.length);
    console.log(quotes[idx])

    return quotes[idx];
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="logo-top-left">
        <Image
          src="/img/herb_diecezji.png"
          alt="Logo"
          width={128}
          height={128}
          priority
        />
      </div>
      <div className="logo-top-right">
        <Image
          src="/img/logo_mezczyzni_red.png"
          alt="Logo"
          width={256}
          height={256}
          priority
        />
      </div>
      <main className="center-column-silownia margin-top-silownia">
        <Typography variant="h3" component="h3" gutterBottom align="center">
          SiŁOWniA
        </Typography>
        <p>
          Proponowane działania:
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
                      {quoteObj.source}
                  </span>
                </div>
              ) : (
                <Button onClick={() => setQuoteObj(generateQuote())}>
                  Zmierz sie ze Słowem
                </Button>
              )}
              </div>
              </li>
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
