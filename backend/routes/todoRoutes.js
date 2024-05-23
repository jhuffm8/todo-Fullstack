import express from 'express'
import {getTodos, createTodo, deleteTodo} from '../controllers/todoController.js'

const router = express.Router()
// grabbing todo
router.get('/', getTodos)
// creating todo
router.post('/', createTodo)
//delete todo
router.delete('/:id', deleteTodo )
export default router