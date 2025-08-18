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

export default function Aktualnosci() {
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
          src="/img/logo_mezczyzni.png"
          alt="Logo"
          width={256}
          height={256}
          priority
        />
      </div>
      <main className="center-column-about">
        <Typography variant="h3" component="h3" gutterBottom align="center">
          Aktualności
        </Typography>
      </main>
    </ThemeProvider>
  );
}
