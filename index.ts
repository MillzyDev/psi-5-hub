import express, { Express, Request, Response } from "express";
import PavlovAIC from "./pavlovAIC";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

console.info("Initialising Pavlov.aic");

app.listen(port, () => {
    console.info(`PSI-5 Website is running at http://localhost:${port}`);
});
