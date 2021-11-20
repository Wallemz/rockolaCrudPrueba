const validarRol = (req, res, next) =>{
    if(req.headers.isadmin){                // Recibimos un parámetro en los headers si es admin
        next();                             // Llamamos la siguiente ruta
    }else{
        res.status(401).send('No tiene Autorización');  // De lo contrario mando error
    }
}

export default validarRol;

// Este middleware se tiene que ejecutar antes de la ruta principal por lo cual en canciones.ts, tenmgo que llamarlo antes