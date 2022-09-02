require('dotenv').config();
// requiring the express and cors libraries
const {FULL_CONTACT_BEARER_TOKEN, SERVER_PORT} = process.env
console.log{SERVER_PORT}
const express = require("express");
const cors = require("cors");

// invoking express
const app = express();

// assigning the server port to a variable 'port' for easier reference and editing
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/api/user_data", (req, res) => {res.status(200).send('Working!')})

app.listen(port, () => console.log('Server is running on port 5000'));