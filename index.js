const connectToMongo = require("./db.js");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json()); // If you want to use (req.body) You have to use this middlewere

// Available Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(PORT, () => {
  console.log(`iNotebook backend started listening on port ${PORT}`);
});
