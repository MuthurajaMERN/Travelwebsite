const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/packages", require("./routes/packages"));
app.use("/api/services", require("./routes/services"));
app.use("/api/testimonials", require("./routes/testimonials"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
