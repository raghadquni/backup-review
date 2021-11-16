const express = require("express");


// Array of todo 
const todo = [
    {
        id: 1,
        taskName: "wakeUp early",
        isDel: false,
        isCompeleted: false
    },
    {
        id: 2,
        taskName: "Breakfast",
        isDel: false,
        isCompeleted: false
    },
    {
        id: 3,
        taskName: "go to camp",
        isDel: false,
        isCompeleted: false
    },
]



const getAllTask = (req,res) => {
    res.status(200).json(todo);
}


module.exports = {
    getAllTask
}