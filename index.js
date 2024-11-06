import express from 'express';
import  taskRoutes from './src/modules/task/task.routes.js'
const app = express();
const port = 3000;


// una forma corta, una funcion anonima con felcha
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json())

app.use(taskRoutes);

// usando una funcion tradicional dentro del metodo listen que heredo de express que es una libreria
//app.listen(port, function () {
  //  console.log(`Server is running on port ${port}`);
//});

