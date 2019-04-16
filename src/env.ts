import path from 'path';


export const PORT = process.env.PORT || 3000;

export const PUBLICFILES =  path.join(__dirname,'/public');

export const DATABASE = {
    mongodb:{
        uri:'mongodb://localhost:27017/mern-tasks'
    },
    mysql:{
        uri:''
    }
}