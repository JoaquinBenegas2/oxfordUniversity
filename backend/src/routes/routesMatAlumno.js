import express from "express";
const router = express.Router();

import matAlumnoController from "../controllers/MatAlumnoController.js";


// Alumnos
router.get("/:cod_alumno", matAlumnoController.getMateriasAlumno);
router.get("/:cod_alumno/:cod_mat", matAlumnoController.getMatAlumno);
router.post("/add", matAlumnoController.saveMateriaAlumno);
router.put("/update/:cod_alumno/:cod_mat", matAlumnoController.updateMateriaAlumno)
router.delete("/delete/:cod_alumno/:cod_mat", matAlumnoController.deleteMateriaAlumno)



export default router;