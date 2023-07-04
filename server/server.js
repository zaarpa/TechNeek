const express = require("express");

const app = express();

const cors = require("cors");
require ('./database/conn');
const userRouter = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
