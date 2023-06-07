const express = require("express");

const app = express();

const cors = require("cors");
require ('./database/conn');


app.use(cors());

app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
