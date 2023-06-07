const mongoose = require("mongoose");
require("dotenv").config();

const conn=mongoose.connect(process.env.ATLAS_URI, { useNewURLParser: true, useUnifiedTopology: true }).catch((err) => console.error(err));