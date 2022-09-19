// Importar BBDD
import mysqlConnection from "../database/db.js"
//-----------------------------------------------------------------------------------------


const controller = {};


// Mertodos CRUD

// Consultar Alumnos
controller.getAllAlumnos = async (req, res) => {
    try {
        const [alumnos] = await mysqlConnection.execute("SELECT * FROM alumno")  
        res.json(alumnos);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Consultar Un Alumno
controller.getAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno;
    try {
        const [alumno] = await mysqlConnection.execute("SELECT * FROM alumno WHERE cod_alumno=?", [cod_alumno])
        res.json(alumno);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Guardar Alumno
controller.saveAlumno = async (req, res) => {
    const dni_alumno = req.body.dni_alumno;
    const nom_alumno = req.body.nom_alumno;
    const ape_alumno = req.body.ape_alumno;
    const ciu_alumno = req.body.ciu_alumno;
    const cur_alumno = req.body.cur_alumno;
    const div_alumno = req.body.div_alumno;
    
    const cod_curso = cur_alumno+div_alumno
    const usuario_alumno = nom_alumno.charAt(0)+ape_alumno.charAt(0)+dni_alumno;

    try {
        await mysqlConnection.execute('INSERT INTO alumno (dni_alumno, nom_alumno, ape_alumno, usuario_alumno, ciudad_alumno, cod_curso) VALUES (?, ?, ?, ?, ?, ?)', [dni_alumno, nom_alumno, ape_alumno,  usuario_alumno, ciu_alumno, cod_curso])
        res.json( {"message": "¡Registro Creado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Actualizar Alumno
controller.updateAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno;

    const dni_alumno = req.body.dni_alumno;
    const nom_alumno = req.body.nom_alumno;
    const ape_alumno = req.body.ape_alumno;
    const ciu_alumno = req.body.ciu_alumno;
    const cur_alumno = req.body.cur_alumno;
    const div_alumno = req.body.div_alumno;
    
    const cod_curso = cur_alumno+div_alumno
    const usuario_alumno = nom_alumno.charAt(0)+ape_alumno.charAt(0)+dni_alumno;
    try {
        await mysqlConnection.execute('UPDATE alumno SET dni_alumno=?, nom_alumno=?, ape_alumno=?, usuario_alumno=?, ciudad_alumno=?, cod_curso=? WHERE cod_alumno = ?', [dni_alumno, nom_alumno, ape_alumno, usuario_alumno, ciu_alumno, cod_curso, cod_alumno]
        );
        res.json( {"message": "¡Registro Actualizado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}   
//-----------------------------------------------------------------------------------------


// Borrar Alumno
controller.deleteAlumno = async (req, res) => {
    const cod_alumno = req.params.cod_alumno;

    try {
        await mysqlConnection.execute("DELETE FROM alumno WHERE cod_alumno = ?", [cod_alumno]);
        res.json( {"message": "¡Registro Eliminado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------




// Export
export default controller;