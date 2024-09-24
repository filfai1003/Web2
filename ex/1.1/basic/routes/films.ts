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

// Definizione della route GET per "/films"
router.get("/", (_req, res) => {
  return res.json(films);
});

// Esporta il router
export default router;
