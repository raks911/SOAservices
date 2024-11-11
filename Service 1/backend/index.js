const express = require('express');
const cors = require("cors");
require("dotenv").config();

const { connectMongoDB } = require("./mongo-conn");

const testUserRouter = require('./routes/testUser');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

//server init
const app = express();
app.use(cors());
app.use(express.json());
var PORT = process.env.PORT;

// database connection
connectMongoDB(process.env.mongo_conn_string).then(() => console.log("Mongo DB connected!"));

// Routes
app.use("/api/testUser", testUserRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(PORT, (error) => {
        if (!error) console.log("Server is Successfully Running, and App is listening on port "+ PORT)
        else console.log("Error occurred, server can't start", error);
    }
);
