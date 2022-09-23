// Importar BBDD
import mysqlConnection from "../database/db.js"
//-----------------------------------------------------------------------------------------


const controller = {};


// Mertodos CRUD

// Consultar Materias
/*
controller.getAllMaterias = async (req, res) => {
    try {
        const [materias] = await mysqlConnection.execute("SELECT * FROM materia")  
        res.json(materias);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
*/
//-----------------------------------------------------------------------------------------


// Consultar Materias de un Alumno
controller.getMateriasAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno;
    try {
        const [materias] = await mysqlConnection.execute("SELECT * FROM alumno_materia WHERE cod_alumno=?", [cod_alumno])
        res.json(materias);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Consultar UNA Materia de UN Alumno
controller.getMatAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno;
    const cod_mat = req.params.cod_mat;
    try {
        const [materia] = await mysqlConnection.execute("SELECT * FROM alumno_materia WHERE cod_alumno=? AND cod_mat=?", [cod_alumno, cod_mat])
        res.json(materia);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Guardar Materia de un Alumno
controller.saveMateriaAlumno = async (req, res) => {
    const cod_alumno = req.body.cod_alumno
    const cod_mat = req.body.cod_mat
    const nota1_mat = req.body.nota1_mat;
    const nota2_mat = req.body.nota2_mat;
    const nota3_mat = req.body.nota3_mat;
    const suma_mat = nota1_mat + nota2_mat + nota3_mat;
    const promedio_mat = suma_mat/3;

    try {
        await mysqlConnection.execute('INSERT INTO alumno_materia (cod_alumno, cod_mat, nota1_mat, nota2_mat, nota3_mat, promedio_mat) VALUES (?, ?, ?, ?, ?, ?)', [cod_alumno, cod_mat, nota1_mat, nota2_mat, nota3_mat, promedio_mat])
        res.json( {"message": "¡Registro Creado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Actualizar Materia de un Alumno
controller.updateMateriaAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno
    const cod_mat_param = req.params.cod_mat

    const cod_mat = req.body.cod_mat;
    const nota1_mat = req.body.nota1_mat;
    const nota2_mat = req.body.nota2_mat;
    const nota3_mat = req.body.nota3_mat;
    const promedio_mat = (nota1_mat + nota2_mat + nota3_mat) / 3;

    try {
        await mysqlConnection.execute('UPDATE alumno_materia SET cod_mat=?, nota1_mat=?, nota2_mat=?, nota3_mat=?, promedio_mat=? WHERE cod_alumno=? AND cod_mat=?', [cod_mat, nota1_mat, nota2_mat, nota3_mat, promedio_mat, cod_alumno, cod_mat_param]
        );
        res.json( {"message": "¡Registro Actualizado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}   
//-----------------------------------------------------------------------------------------


// Borrar Materia de un Alumno
controller.deleteMateriaAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno
    const cod_mat = req.params.cod_mat

    try {
        await mysqlConnection.execute("DELETE FROM alumno_materia WHERE cod_alumno=? AND cod_mat=?", [cod_alumno, cod_mat]);
        res.json( {"message": "¡Registro Eliminado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------




// Export
export default controller