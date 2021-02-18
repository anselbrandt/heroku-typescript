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
if (NODE_ENV === "dev")
  console.log("to start webpack, open a new tab and 'cd /web && yarn start'");

const devResponse = `<html>
<div>Looks like you're running in dev mode.</div>
<div></div>
<div>Start the React app by running 'yarn start' in the '/web' folder.</div>
</html>`;

const main = async () => {
  const file = await fs.readFile(
    path.join(__dirname, "../public/data.json"),
    "utf-8"
  );

  const app = express();
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  app.use(express.static(path.join(__dirname, "../web/build")));

  app.get("/", (req, res) => {
    if (NODE_ENV === "dev") {
      res.send(devResponse);
    } else {
      res.sendFile(path.join(__dirname + "../web/build/index.html"));
    }
  });

  app.get("/api", (req, res) => {
    const data = JSON.parse(file);
    data.time = new Date().toLocaleTimeString();
    res.json(data);
    // res.sendFile(path.join(__dirname, "../public/data.json"));
  });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((error) => {
  console.error(error);
});
