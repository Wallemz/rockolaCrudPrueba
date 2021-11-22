import { Router } from "express";
import { actualizarCancion, agregarCancion, eliminarCancion, obtenerCancion, obtenerCanciones } from "../controllers/cancionesController";
import errorHandler from "../middlewares/error";
import validarRol from "../middlewares/validaRol";

const cancionesRoutes = (app) =>{
    const router = Router();            // Creamos un router para las rutas
    app.use('/', router) ;              // En vez de usar el app, usamos el router de express

    // REQ

    //router.use(validarRol);           // Use el middleware al antes de la principal

    router.get('/obtenerCanciones', obtenerCanciones);  // Ahora creamos rutas con el router
    router.get('/obtenerCancion/:id', obtenerCancion);  // Ahora creamos rutas con el router
    router.post('/agregarCancion', agregarCancion);  // Ahora creamos rutas con el router
    router.put('/actualizarCancion/:id', actualizarCancion);  // Ahora creamos rutas con el router
    router.delete('/eliminarCancion/:id', eliminarCancion);  // Ahora creamos rutas con el router

    router.use(errorHandler);           // Use el middleware al final

}
export default cancionesRoutes;         // Exporto la función para usar en app.ts