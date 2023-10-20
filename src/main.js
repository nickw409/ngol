const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   var options = {
      root: __dirname,
   }
   var fileName = "index.html";
   res.sendFile(fileName, options, (err) => {
      if (err) {
         console.log("Error");
      } else {
         console.log("Sent:", fileName);
      }
   })
});

app.listen(port, () => {
   console.log(`Example app on port: ${port}`);
});
