import {Router} from "express";
import path from 'path';
export const WEB = Router();

WEB.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


