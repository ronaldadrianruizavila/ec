import { Task } from '../models/'
import { Request, Response } from 'express';


export default class TaskController{
    
    static async index(req:Request, res:Response){
        let tasks = await Task.find();
        res.json(tasks)
    }
    static async show(req:Request, res:Response){
        const id  = req.params.id;
        let task = await Task.findById({_id:id});
        res.json(task)
    }

    static async update(req:Request, res:Response){
       const {title, description} = req.body;
       const id  = req.params.id;
       const newTask = {title,description};
       let task = await Task.findOneAndUpdate({_id:id},newTask,{
           new:true
       })

       res.json(task)

    }

    
    static async store( req: Request, res: Response){
        let {title,description}  = req.body;
        const task = new Task({
            title,
            description
        })
        await task.save();
        res.json({status:200,
            task})
    }

}