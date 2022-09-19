// Importar BBDD
import mysqlConnection from "../database/db.js"
//-----------------------------------------------------------------------------------------


const controller = {};


// Mertodos CRUD

// Consultar Profesores
controller.getAllProfesores = async (req, res) => {
    try {
        const [profesores] = await mysqlConnection.execute("SELECT * FROM profesor")  
        res.json(profesores);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Consultar Un Profesor
controller.getProfesor = async (req, res) => {
    const cod_prof = req.params.cod_prof;
    try {
        const [profesor] = await mysqlConnection.execute("SELECT * FROM profesor WHERE cod_prof=?", [cod_prof])
        res.json(profesor);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Guardar Profesor
controller.saveProfesor = async (req, res) => {
    const dni_prof = req.body.dni_prof;
    const nom_prof = req.body.nom_prof;
    const ape_prof = req.body.ape_prof;
    const ciu_prof = req.body.ciu_prof;

    const usuario_prof = nom_prof.charAt(0)+ape_prof.charAt(0)+dni_prof;

    try {
        await mysqlConnection.execute('INSERT INTO profesor (dni_prof, nom_prof, ape_prof, usuario_prof, ciudad_prof) VALUES (?, ?, ?, ?, ?)', [dni_prof, nom_prof, ape_prof,  usuario_prof, ciu_prof])
        res.json( {"message": "¡Registro Creado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Actualizar Profesor
controller.updateProfesor = async (req, res) => {
    const cod_prof = req.params.cod_prof;

    const dni_prof = req.body.dni_prof;
    const nom_prof = req.body.nom_prof;
    const ape_prof = req.body.ape_prof;
    const ciu_prof = req.body.ciu_prof;

    const usuario_prof = nom_prof.charAt(0)+ape_prof.charAt(0)+dni_prof;
    try {
        await mysqlConnection.execute('UPDATE profesor SET dni_prof=?, nom_prof=?, ape_prof=?, usuario_prof=?, ciudad_prof=? WHERE cod_prof = ?', [dni_prof, nom_prof, ape_prof, usuario_prof, ciu_prof, cod_prof]
        );
        res.json( {"message": "¡Registro Actualizado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}   
//-----------------------------------------------------------------------------------------


// Borrar Profesor
controller.deleteProfesor = async (req, res) => {
    const cod_prof = req.params.cod_prof;

    try {
        await mysqlConnection.execute("DELETE FROM profesor WHERE cod_prof = ?", [cod_prof]);
        res.json( {"message": "¡Registro Eliminado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------




// Export
export default controller