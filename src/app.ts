import express from 'express';      // Importamos Express

const app = express();              // Función que ofrece express la guardamos en app
const port = 3000;                  // Guardamos el puerto, en este caso 300

// RUTAS
app.get('/', (req, res)=>{          // Función para definir GET (ruta, función(request,response))
    res.send('GET_RTA: Prueba del servidor'); // Retorno deL GET
})

app.listen(port, ()=>{              // Listen es uno de los métodos de express (Puerto, función)
    return console.log(`INFO: Servidor corriendo en el puerto ${port}`);
});