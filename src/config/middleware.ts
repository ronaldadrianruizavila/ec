import { Application } from "express";
import morgan from 'morgan';
import { json, urlencoded } from 'express';
import cors from 'cors'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const webpackConfig = require( '../../webpack.config');

export const configMiddleware = (app: Application) => {
    //reviso de peticiones
    app.use(morgan('dev'));

    //aceptar cors
    app.use(cors());

    app.use(webpackDevMiddleware(webpack(webpackConfig)))
    
    //acceptar JSON
    app.use(urlencoded({ extended: true }));
    app.use(json());
}
