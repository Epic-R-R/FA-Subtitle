import dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/index";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
app.use("/api/v1", routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
