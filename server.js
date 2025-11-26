const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Basic route to check server
app.get("/", (req, res) => {
    res.send("Smart Pickup Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
