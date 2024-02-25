const express = require("express")
const app = express();
const cors = require('cors');
const { connectDB } = require("./db");
const router = require("./routers/baseRouters");

app.use(express.json());
app.use(cors());
app.use(router);

// connectDB();
app.listen(5000, () => console.log("App Started at 5000.."));