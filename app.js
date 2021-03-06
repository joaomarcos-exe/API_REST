import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import homeRouter from './src/routes/homeRoute';
import alunoRouter from './src/routes/alunoRoute';
import userRouter from './src/routes/userRoute';
import tokenRouter from './src/routes/tokenRoute';
import fotoRouter from './src/routes/fotoRoute'

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
        this.app.use('/alunos/', alunoRouter)
        this.app.use('/token/', tokenRouter)
        this.app.use('/foto/', fotoRouter)
    }
}

export default new App().app