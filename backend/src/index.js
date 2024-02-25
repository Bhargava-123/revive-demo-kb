const express = require("express")
const app = express();
import { connectDB } from "./db";
import router from "./routers/baseRouters";

app.use(express.json());
app.use(router);

// connectDB();
app.listen(5000, () => console.log("App Started at 5000.."));