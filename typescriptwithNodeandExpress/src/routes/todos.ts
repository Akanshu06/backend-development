import  Router  from "express";
import {Todo} from "../models/todo";
const router=Router();

type requestBody= {text:string};
type paramsBody={todoID:string};
let todos:Todo[]=[];

router.get('./',(req,res,next)=>{
    res.status(200).json({todos:todos})
});

router.post('./todo',(req,res,next)=>{
    const body=req.body as requestBody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo);
});

router.put('./todo/:todoID',(req,res,next)=>{
    const params = req.params as paramsBody;
    const todoid= params.todoID;
    const body=req.body as requestBody;
    const todoIndex = todos.findIndex((todoItem)=>todoItem.id===todoid);
    if(todoIndex>=0){
        todos[todoIndex]={id:todos[todoIndex].id,text:body.text};
    }
    res.status(404).json({message:'could not find todo for this id'})
});

router.delete('/todo/:todoID',(req,res,next)=>{
    const params=req.params as paramsBody;
    todos=todos.filter((todItem)=>todItem.id !==params.todoID);
    res.status(200).json({message:'deleted todo',todos:todos});
});


export default router;

