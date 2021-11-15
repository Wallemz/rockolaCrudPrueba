import express from 'express';      // Importamos Express

const app = express();              // Función que ofrece express la guardamos en app
const port = 3000;                  // Guardamos el puerto, en este caso 300

// DEFINICIÓN BODY JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// RUTAS
app.get('/agregarCanciones/:id', (req, res, next)=>{  // Función para definir GET (ruta, función(request,response,next))
    
    // REQUEST
    // Obtener datos del objeto Req
    console.log(req.headers);       // Obtengo los headers de la petición
    console.log(req.params);        // Obtengo los params de la petición
    console.log(req.query);         // Obtengo los query params de la petición
    console.log(req.body);          // Obtengo el body de la petición pero llega undefined, hay que definir que el body llega en formato JSON Ver lineas 7 y 8

    // RESPONSE
    //res.send('GET_RTA: Prueba del servidor.');  // Retorno de la petición con texto plano
    //res.status(401).send('GET_RTA: Prueba del servidor.');  // Retorno con status
    //res.status(404).end();                      // Retorno sin info
    res.status(200).json({nombre:"William"});   // Retorno de un Json

    // NEXT
    //next(); // Manda a ejecutar la siguiente ruta
})


// LISTEN DEL SERVICIO
app.listen(port, ()=>{              // Listen es uno de los métodos de express (Puerto, función)
    return console.log(`INFO: Servidor corriendo en el puerto ${port}.`);
});