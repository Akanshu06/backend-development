 import express from 'express';
 import bodyparser from 'body-parser';

 import todosRoutes from '../routes/todos'
const app = express();
app.use(bodyparser.json())

app.use(todosRoutes);

app.listen({port:3000});
