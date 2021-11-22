import mysql from 'mysql2';     // Importamos libreria MySQL
import config from '../config/config'; // Importamos variables de entorno

// CREAR CONEXIÓN
const getConnection = () =>{
    const connection = mysql.createConnection({
        database: config.DATABASE,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        host: config.DB_HOST,
        port: +config.DB_PORT   // El + es para obligar que el dato que traiga sea un número, ya que no recibe string
    });

    connection.connect((error)=>{       // Try catch para error de conexión
        if(error){
            throw error;
        } else{
            console.log('Conexión exitosa!')
        }
    });
    return connection;
}


// EJECUTAR QUERY
const executeQuery = (query:string):Promise<any> =>{    // Retorna una promesa
    return new Promise((resolve, reject)=>{
        try {
            const connection = getConnection();         // Ejecutamos la conexión
            connection.query(query,(error, result)=>{   // Try catch para error de query
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
            connection.end();
        } catch (error) {
            //console.log(error);
            reject(error);
        }
    })
}

export default executeQuery;