import express, { ErrorRequestHandler } from 'express';
import filmsRouter from './routes/films';

const app = express();

app.use(express.json());

app.use('/films', filmsRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

app.use(errorHandler);

export default app;
