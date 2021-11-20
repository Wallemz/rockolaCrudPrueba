import executeQuery from "../services/mysql.service";

const agregarPlaylist = async(req, res, next) =>{
    const {nombre, descripcion, ids} = req.body;    // Desestructuración
    try {
        const response = await executeQuery(`INSERT INTO playlist (nombre, descripcion) VALUES ('${nombre}','${descripcion}'`);
        console.log(response)
        res.status(201).json({message:'created', id: response.insertId});
    } catch (error) {
        next(error);            // Middleware
    }
}

const agregarCancionesAPlaylist = async(req, res, next) =>{
    const {idcanciones, idplaylist} = req.query;    // Desestructuración
    try {
        const response = await executeQuery(`INSERT INTO cancionPlaylist (idcanciones, idplaylist) VALUES ('${idcanciones}','${idplaylist}'`);
        console.log(response)
        res.status(201).json({message:'created', id: response.insertId});
    } catch (error) {
        next(error);            // Middleware
    }
}