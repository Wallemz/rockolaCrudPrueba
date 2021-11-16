import executeQuery from "../services/mysql.service";

const obtenerCanciones = (req, res) =>{
    executeQuery('SELECT * FROM canciones').then((response)=>{ // Como es una promesa debe terminar en .then y catch
        const data ={
            message: `${response.length} datos encontrados.`,
            datos: response.length > 0 ? response : null   // IF Ternario
        }
        res.json(data);     // Si logra la petición devuelve el response
    }).catch((error)=>{
        res.status(500).send(error);        // Si no se logra la petición error
    });
}

const obtenerCancion = (req, res) =>{
    res.send('obtenerCancion desde el controlador');
}

const agregarCancion = (req, res) =>{
    res.send('Obtener canciones desde el controlador');
}

const actualizarCancion = (req, res) =>{
    res.send('agregarCancion desde el controlador');
}

const eliminarCancion = (req, res) =>{
    res.send('eliminarCancion desde el controlador');
}
export {obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion}