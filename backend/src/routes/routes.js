import express from "express";
const router = express.Router();

import alumnoController from "../controllers/AlumnoController.js";


// Alumnos
router.get("/", alumnoController.getAllAlumnos);
router.get("/:cod_alumno", alumnoController.getAlumno);
router.post("/add", alumnoController.saveAlumno);
router.put("/update/:cod_alumno", alumnoController.updateAlumno)
router.delete("/delete/:cod_alumno", alumnoController.deleteAlumno)




export default router;