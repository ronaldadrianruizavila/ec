import Server from './server'
import {API} from "./routes/api";
import { PORT,PUBLICFILES } from './env';
import { configMiddleware } from './config/middleware'
import express from 'express';
import { WEB } from './routes/web';
import connection from './config/database'

const server = Server.instance;
const app = server.aplication

/*CONFIG MIDDLEWARES*/
configMiddleware(app)


//Rutas
app.use('/api',API);
app.use(WEB);

//static file

// app.use(express.static(PUBLICFILES));

connection.then(db=>console.log('DB is connect')).catch(()=>{
    console.log('Db is error')
})

/*FIN DE MIDDLEWARE*/


//startAplication
server.start(() => {
    console.log(`Servidor corriendo ${PORT}`)
});