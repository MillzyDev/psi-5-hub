import express, { Express, Request, Response } from "express";
import PavlovAIC from "./pavlovAIC";
import dotenv from "dotenv";
import path from "path";
import { EmbedField, MessageEmbed } from "discord.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//console.debug(process.env);

const pavlov: PavlovAIC = new PavlovAIC(process.env.WEBHOOK_URL);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/join", (req: Request, res: Response) => {
    if (Object.keys(req.query).length != 8) {
        res.sendFile(path.join(__dirname, "/views/join.html"));
    } else {
        res.sendFile(path.join(__dirname, "/views/submit.html"));
        console.debug(req.query);

        const name = req.query["name"]?.toString() ?? "Error";
        const steamID = req.query["steamID"]?.toString()  ?? "Error.";
        const discord = req.query["discord"]?.toString() ?? "Error.";
        const reason = req.query["reason"]?.toString() ?? "Error.";
        const pros = req.query["pros"]?.toString() ?? "Error.";
        const cons = req.query["cons"]?.toString() ?? "Error.";
        const scps = req.query["scps"]?.toString() ?? "Error.";
        const medLicense = req.query["medLicense"]?.toString() === "true" ? true : false;

        const embed = new MessageEmbed() 
            .setAuthor(name)
            .setTitle("New application to join PSI-5!")
            .setColor("GREYPLE")
            .addFields([
                {
                    name: "SteamID",
                    value: steamID,
                    inline: true
                },
                {
                    name: "Discord Handle",
                    value: discord,
                    inline: true
                },
                {
                    name: "Why do you want to join PSI-5?",
                    value: reason
                },
                {
                    name: "Why should you be accepted to join PSI-5?",
                    value: pros
                },
                {
                    name: "What are some \"cons\" you would consider yourself to have?",
                    value: cons
                },
                {
                    name: "List at least 3 of PSI-5's primary SCPs for study.",
                    value: scps
                },
                {
                    name: "Do you have a Medical License?",
                    value: medLicense ? "Yes." : "No."
                }
            ]);

        pavlov.sendMessage(embed);
    }
});

console.info("Initialising Pavlov.aic");

app.listen(port, () => {
    console.info(`PSI-5 Website is running at http://localhost:${port}`);
});
