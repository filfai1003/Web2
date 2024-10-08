import express from "express";

import typesRouter from "./routes/types";
import filmRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
    
app.use("/types", typesRouter);
app.use("/films", filmRouter);

export default app;
