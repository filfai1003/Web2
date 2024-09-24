import { Router } from "express";
import { Film } from "./types";

const router = Router();

// Un array di oggetti Film (puoi modificarlo in base ai tuoi film preferiti)
const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "A mind-bending thriller",
    imageUrl: "https://example.com/inception.jpg"
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Wachowski Sisters",
    duration: 136,
    budget: 63,
    description: "A dystopian future",
    imageUrl: "https://example.com/matrix.jpg"
  }
];

router.get("/", (req, res) => {

  const minimumDuration = parseInt(req.query["minimum-duration"] as string, 10);
  if (!isNaN(minimumDuration)) {
    const filteredFilms = films.filter(film => film.duration >= minimumDuration);
    return res.json(filteredFilms);
  }

  const nameFilter = req.query["name-filter"] as string;
  if (nameFilter) {
    const filteredFilms = films.filter(film => film.title.startsWith(nameFilter));
    return res.json(filteredFilms);
  }

  return res.json(films);
});

router.get("/:id", (req, res) => {
  const filmId = parseInt(req.params.id, 10);
  const filmToRet = films.find(film => film.id === filmId)
  return res.json(filmToRet);
});

router.post("/", (req, res) => {
  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || typeof duration !== "number" || duration <= 0) {
    return res.status(400).json({ message: "Missing or invalid fields" });
  }

  const newId = films.length > 0 ? films[films.length - 1].id + 1 : 1;

  const newFilm: Film = {
    id: newId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(newFilm);

  return res.status(201).json(newFilm);
});

export default router;
