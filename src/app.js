import express from "express";
import cors from "cors";

//TEST git ignore

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

export { app };
