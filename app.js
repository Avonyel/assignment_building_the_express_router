const express = require("./lib/express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});
