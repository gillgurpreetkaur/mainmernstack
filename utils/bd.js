const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/thapa")
  .then(() => console.log("Connected Successfully"))
  .catch((error) => console.error("Connection Error:", error));


