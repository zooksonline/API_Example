const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

item = require("./routes/api/items")

app.use("/api/item", item)

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server run on Port ${port}`))