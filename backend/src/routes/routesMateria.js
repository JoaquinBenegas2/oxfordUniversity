import express from "express";
const router = express.Router();

import materiaController from "../controllers/MateriaController.js";


// Alumnos
router.get("/", materiaController.getAllMaterias);
router.get("/:cod_mat", materiaController.getMateria);
router.post("/add", materiaController.saveMateria);
router.put("/update/:cod_mat", materiaController.updateMateria)
router.delete("/delete/:cod_mat", materiaController.deleteMateria)



export default router;