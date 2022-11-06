const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT | 3001;

const app = express();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
