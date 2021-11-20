const errorHandler = (error, req, res ,next) =>{            // El middleware es una función que en este caso manejará los errores de las rutas. El orden de los parametros que se pasan es importante
    console.log(error);                                     // Log de errores
    const message = error.message || error.sqlMessage;      // Guardo el mensaje de error de la ruta o del SQL en la variable message
    res.status(error.status || 500)                         // Retorna error en el servidor interno
    res.json({message: message || 'Internal server error'});// Si no se logra la petición error
}
export default errorHandler;