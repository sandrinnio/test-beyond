import express, { Express, Request, Response } from "express";
import cors from "cors";
import Papa from "papaparse";
import fs from "fs";
import path from "path";
import { PayloadKey } from "../client/utils";

const app: Express = express();
app.use(cors());
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  const csvFilePath = path.join(path.resolve("./", "data"), "influencers.csv");
  const csvFile = fs.readFileSync(csvFilePath, "utf-8");
  const influencers = Papa.parse(csvFile, { header: true }).data as Record<
    PayloadKey,
    string
  >[];
  res.json(influencers);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
