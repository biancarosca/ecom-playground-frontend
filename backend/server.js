const express = require("express");
const cors = require("cors");
const productsRouter = require("./routers/productsRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",productsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));