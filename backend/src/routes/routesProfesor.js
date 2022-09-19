import express from "express";
const router = express.Router();

import profesorController from "../controllers/ProfesorController.js";


// Alumnos
router.get("/", profesorController.getAllProfesores);
router.get("/:cod_prof", profesorController.getProfesor);
router.post("/add", profesorController.saveProfesor);
router.put("/update/:cod_prof", profesorController.updateProfesor)
router.delete("/delete/:cod_prof", profesorController.deleteProfesor)



export default router;