import express from "express";
import http from "http";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { promises as fs } from "fs";

const PORT = process.env.PORT || 4000;

const NODE_ENV = process.env.NODE_ENV || "dev";

console.log(`running in ${NODE_ENV}`);

const data = {
  message: "Hello from the API server.",
};

const main = async () => {
  const app = express();
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(express.static(path.join(__dirname, "../public")));

  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.get("/", (req, res) => res.render("pages/index"));

  app.get("/api", (req, res) => {
    res.json(data);
  });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((error) => {
  console.error(error);
});
