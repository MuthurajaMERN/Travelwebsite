const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const http = require('http');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Server is working!\n');
//   });
//   server.listen(5000, 'localhost', () => {
//     console.log('Server running on http://localhost:5000');
//   });

// Routes
app.use("/api/packages", require("./routes/packages"));
app.use("/api/services", require("./routes/services"));
app.use("/api/testimonials", require("./routes/testimonials"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server RAJA running ${PORT}`));
