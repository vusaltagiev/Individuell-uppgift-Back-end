const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", require("./routes/productsRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
