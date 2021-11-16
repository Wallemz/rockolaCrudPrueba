import executeQuery from "../services/mysql.service";

const obtenerCanciones = (req, res) =>{
    executeQuery('SELECT * FROM canciones').then((response)=>{ // Como es una promesa debe terminar en .then y catch
        const data ={
            message: `${response.length} datos encontrados.`,
            datos: response.length > 0 ? response : null   // IF Ternario
        }
        res.json(data);     // Si logra la petición devuelve el response
    }).catch((error)=>{
        console.log(error);
        res.status(500).send(error);        // Si no se logra la petición error
    });
}

const obtenerCancion = (req, res) =>{
    const {id} = req.params;    // Desestructuración
    executeQuery(`SELECT * FROM canciones WHERE idcanciones = ${id}`).then((response)=>{ // Como es una promesa debe terminar en .then y catch
        const data ={
            message: `${response.length} datos encontrados.`,
            datos: response.length > 0 ? response[0] : null   // IF Ternario
        }
        res.json(data);     // Si logra la petición devuelve el response
    }).catch((error)=>{
        console.log(error);
        res.status(500).send(error);        // Si no se logra la petición error
    });
}

const agregarCancion = async(req, res) =>{
    const {nombre, genero, artista} = req.body;    // Desestructuración
    try {
        const response = await executeQuery(`INSERT INTO canciones (nombre, genero, artista) VALUES ('${nombre}','${genero}','${artista}')`);
        console.log(response)
        res.status(201).json({message:'created', id: response.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        // Si no se logra la petición error
    }
}

const actualizarCancion = async(req, res) =>{
    const {nombre, genero, artista} = req.body;    // Desestructuración
    try {
        const response = await executeQuery(`UPDATE canciones SET nombre = '${nombre}', genero = '${genero}', artista = '${artista}' WHERE idcanciones = ${req.params.id}`);
        console.log(response)
        if(response.affectedRows > 0){
            res.json({message:'updated'});
        }else{
            res.status(404).json({message:`No existe registro con id: ${req.params.id}`});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        // Si no se logra la petición error
    }
}

const eliminarCancion = async(req, res) =>{
    try {
        const response = await executeQuery(`DELETE FROM canciones WHERE idcanciones = ${req.params.id}`);
        console.log(response)
        if(response.affectedRows > 0){
            res.json({message:'deleted'});
        }else{
            res.status(404).json({message:`No existe registro con id: ${req.params.id}`});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        // Si no se logra la petición error
    }
}
export {obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion}