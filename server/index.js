import "dotenv/config";
import express from "express";
import router from "./helper/routing/route.js";
import cors from "cors";
const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));
