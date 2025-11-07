import fs from "fs";
import path from "path";
import PostsReader from "./PostsReader";

type Post = {
  title: string;
  author: string;
  date: string;
  technicalDate: string; // Dodaj pole technicalDate
  content: string;
};

export default async function Aktualnosci() {
  // Ścieżka do katalogu z plikami JSON
  const postsDirectory = path.join(process.cwd(), "public", "posts");

  // Pobierz wszystkie pliki JSON z katalogu
  const filenames = fs.readdirSync(postsDirectory);

  // Wczytaj dane z każdego pliku JSON
  const posts: Post[] = filenames.map((filename: string) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  });

  // Posortuj posty po polu technicalDate (malejąco)
  posts.sort((a, b) => (a.technicalDate > b.technicalDate ? -1 : 1));

  // Przekaż dane do komponentu klienckiego
  return <PostsReader posts={posts} />;
}
