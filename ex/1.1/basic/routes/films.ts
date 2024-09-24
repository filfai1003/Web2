import { Router } from 'express';
import { Film } from '../types';

const films: Film[] = [
  {
    id: 1,
    title: 'Inception',
    director: 'Christopher Nolan',
    duration: 148,
    budget: 160,
    description: 'A mind-bending thriller about dreams within dreams.',
    imageUrl: 'https://image-link.com/inception.jpg',
  },
  {
    id: 2,
    title: 'The Matrix',
    director: 'The Wachowskis',
    duration: 136,
    budget: 63,
    description: 'A hacker discovers the reality is a simulated world.',
    imageUrl: 'https://image-link.com/matrix.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    director: 'Christopher Nolan',
    duration: 169,
    budget: 165,
    description: 'A journey through space to save humanity.',
    imageUrl: 'https://image-link.com/interstellar.jpg',
  },
];

const router = Router();

router.get('/', (_req, res) => {
  res.json(films);
});

export default router;
