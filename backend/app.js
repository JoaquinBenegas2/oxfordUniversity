import express from "express"
import { urlencoded } from "express";
import cors from "cors"

// Importar Enrutador
import alumnoRoutes from "./src/routes/routes.js"
import profesorRoutes from "./src/routes/routesProfesor.js"
import materiaRoutes from './src/routes/routesMateria.js'
import matAlumnoRoutes from "./src/routes/routesMatAlumno.js"


const app = express();


// Config / Middlewares:
app.use(cors())
app.use(express.json());
app.use(urlencoded({extended: false}));
//----------------------------------------------------------


// Routes:
app.use("/alumnos", alumnoRoutes);
app.use("/profesores", profesorRoutes);
app.use("/materias", materiaRoutes);
app.use("/materias-alumno", matAlumnoRoutes)
//----------------------------------------------------------


// Starting the Server:
app.listen(4000, () => {
    console.log(`Server UP running in http://localhost:4000/`);
});
//----------------------------------------------------------