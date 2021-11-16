// 1
const express = require("express");

// 2 controllers, destructuring
const { getAllTask} = require("./../controllers/todo");
const todoRouter = express.Router();
todoRouter.get("/", getAllTask)


module.exports = todoRouter;