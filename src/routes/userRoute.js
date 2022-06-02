import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post('/', userController.store)

export default router;

/*
index => Lista todos os usuarios => get
store/create => cria um novo usuario => post
delete => Apaga um ususario  => delete 
show => mostra um usuario  => get
update => atualiza um usuario => patch ou put
*/