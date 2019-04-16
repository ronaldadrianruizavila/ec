import { PORT } from '../env';
import express, { Application } from 'express';
import socketIO from 'socket.io'
import http from 'http';
import { Socket } from 'dgram';

export default class Server {
    private static _instance: Server;
    private app: Application;
    private port: number;
    public io: socketIO.Server;
    private server: any;

    private constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = Number(PORT);
        this.io = socketIO(this.server);
        this.escucharSockets();
    }
    
    public configMiddleware(app: Application){

    }

    static get instance(): Server {
        return this._instance || (this._instance = new this());
    }

    start(callback: Function) {
        this.server.listen(this.port, callback);
    }

    private escucharSockets() {
        this.io.on('connection', (cliente: Socket) => {

        });
    }

    get aplication() {
        return this.app;
    }

}