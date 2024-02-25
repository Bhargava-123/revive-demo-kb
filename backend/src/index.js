const express = require("express")
const app = express();
app.use(express.json());


app.get("/demo-get", (req, res) => {
    res.send("DEMO GET METHOD IS WORKING..");
})

app.listen(5000, () => console.log("App Started at 5000.."));