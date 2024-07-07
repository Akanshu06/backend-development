 import express from 'express';
 import bodyparser from 'body-parser';

 import tudosRoutes from './routes/todos'
const app = express();
app.use(bodyparser.json())

app.use(tudosRoutes);

app.listen(3000);
