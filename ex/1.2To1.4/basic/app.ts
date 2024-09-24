import express from "express";

import typesRouter from "./routes/types";
import filmRouter from "./routes/films";

const app = express();

let getRequestCount = 0;

app.use((req, _res, next) => {
  if (req.method === "GET") {
    getRequestCount++;
    console.log(`GET counter: ${getRequestCount}`);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
    
app.use("/types", typesRouter);
app.use("/films", filmRouter);

export default app;
