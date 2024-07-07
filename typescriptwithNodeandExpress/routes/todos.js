"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const todos = [];
router.get('./', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('./todo', (req, res, next) => {
});
exports.default = router;
