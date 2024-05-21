import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes";
import errorHandler from "./utils/ErrorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(errorHandler);

export default app;
