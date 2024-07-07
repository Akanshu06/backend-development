"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
let todos = [];
router.get('./', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('./todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
});
router.put('./todo/:todoID', (req, res, next) => {
    const params = req.params;
    const todoid = params.todoID;
    const body = req.body;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    }
    res.status(404).json({ message: 'could not find todo for this id' });
});
router.delete('/todo/:todoID', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todItem) => todItem.id !== params.todoID);
    res.status(200).json({ message: 'deleted todo', todos: todos });
});
exports.default = router;
