import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import homeRouter from './src/routes/homeRoute';
import userRouter from './src/routes/userRoute';

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', homeRouter)
        this.app.use('/users/', userRouter)
    }
}

export default new App().app