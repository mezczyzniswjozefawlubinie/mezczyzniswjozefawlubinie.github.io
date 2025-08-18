"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "./theme";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
      <main className="center-column">
        <Link href="/onas/" passHref legacyBehavior>
          <Card
            className="dark-card card-30"
            component="a"
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                O nas
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href="/aktualnosci/" passHref legacyBehavior>
          <Card
            className="dark-card card-30"
            component="a"
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                Aktualności
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href="/silownia/" passHref legacyBehavior>
          <Card
            className="dark-card card-30"
            component="a"
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                SiŁOWniA
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </main>
    </ThemeProvider>
  );
}
