import  Router  from "express";
import {Todo} from "../models/todo";
const router=Router();
let todos:Todo[]=[];

router.get('./',(req,res,next)=>{
    res.status(200).json({todos:todos})
});

router.post('./todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo);
});

router.put('./todo/:todoID',(req,res,next)=>{
    const todoid= req.params.todoID;
    const todoIndex = todos.findIndex((todoItem)=>todoItem.id===todoid);
    if(todoIndex>=0){
        todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text};
    }
    res.status(404).json({message:'could not find todo for this id'})
});

router.delete('/todo/:todoID',(req,res,next)=>{
    todos=todos.filter((todItem)=>todItem.id !==req.params.todoID);
    res.status(200).json({message:'deleted todo',todos:todos});
});


export default router;

