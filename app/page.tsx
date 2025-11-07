"use client";

import { ThemeProvider } from "@mui/material";
import darkTheme from "./theme";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
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
