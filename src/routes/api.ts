import {Router} from "express";
import {TaskController} from '../controllers'
export const API = Router();

API.get('/task',TaskController.index );
API.get('/task/:id',TaskController.show );
API.post('/task',TaskController.store );
API.put('/task/:id',TaskController.update );
