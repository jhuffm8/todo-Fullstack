import Todo from "../models/TodoModel.js";

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
}

export  {getTodos}