// Importar BBDD
import mysqlConnection from "../database/db.js"
//-----------------------------------------------------------------------------------------


const controller = {};


// Mertodos CRUD

// Consultar Materias
controller.getAllMaterias = async (req, res) => {
    try {
        const [materias] = await mysqlConnection.execute("SELECT * FROM materia")  
        res.json(materias);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Consultar Una Materia
controller.getMateria = async (req, res) => {
    const cod_mat = req.params.cod_mat;
    try {
        const [materia] = await mysqlConnection.execute("SELECT * FROM materia WHERE cod_mat=?", [cod_mat])
        res.json(materia);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Guardar Materia
controller.saveMateria = async (req, res) => {
    const nom_mat = req.body.nom_mat;
    const desc_mat = req.body.desc_mat;

    try {
        await mysqlConnection.execute('INSERT INTO materia (nom_mat, desc_mat) VALUES (?, ?)', [nom_mat, desc_mat])
        res.json( {"message": "¡Registro Creado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------


// Actualizar Materia
controller.updateMateria = async (req, res) => {
    const cod_mat = req.params.cod_mat;

    const nom_mat = req.body.nom_mat;
    const desc_mat = req.body.desc_mat;

    try {
        await mysqlConnection.execute('UPDATE materia SET nom_mat=?, desc_mat=? WHERE cod_mat = ?', [nom_mat, desc_mat, cod_mat]
        );
        res.json( {"message": "¡Registro Actualizado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}   
//-----------------------------------------------------------------------------------------


// Borrar Materia
controller.deleteMateria = async (req, res) => {
    const cod_mat = req.params.cod_mat;

    try {
        await mysqlConnection.execute("DELETE FROM materia WHERE cod_mat = ?", [cod_mat]);
        res.json( {"message": "¡Registro Eliminado Correctamente!"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//-----------------------------------------------------------------------------------------




// Export
export default controller