import express from "express";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";
import {PORT} from "./config.js"

const app = express();

const _dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(_dirname, "views"));
app.set("view engine", "ejs"); 
app.use(indexRouter);

app.use(express.static(join(_dirname, "public")));

app.listen(PORT);
console.log("Server on port", PORT);
