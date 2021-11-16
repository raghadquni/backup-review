// 1 - call all backages

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// 2 - for express
const app = express();

// Array of todo 
// const todos = [
//     {
//         id: 1,
//         taskName: "wakeUp early",
//         isDel: false,
//         isCompeleted: false
//     },
//     {
//         id: 2,
//         taskName: "Breakfast",
//         isDel: false,
//         isCompeleted: false
//     },
//     {
//         id: 3,
//         taskName: "go to camp",
//         isDel: false,
//         isCompeleted: false
//     },
// ]

// // 7 - routers
const todoRouter = require("./routers/routes/todo")


// 3 - config enviroment..
dotenv.config();

// 4 - built-in level middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// 5 - middlewares
const todo = (req, res, next) => {
    try {
        console.log("DONE");
        next();
      } catch (error) {
        res.status(401).json("Something went wrong ");
      }
    };

// 8 - routers middleware
app.use("/todo", todoRouter)

// 6 - PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

