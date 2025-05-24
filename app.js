import express from "express";
import bodyParser from "body-parser";
import schoolRoutes from "./routes/schoolRoutes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(express.json());
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
