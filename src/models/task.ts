import { Schema, model } from 'mongoose';


const task: Schema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true}
})

export default model('Task',task);