import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

//Não deveriam existir
router.get('/', userController.index)
router.get('/:id', userController.show)


router.post('/', userController.store)
router.put('/', loginRequired,userController.update)
router.delete('/', loginRequired,userController.delete)

export default router;

/*
index => Lista todos os usuarios => get
store/create => cria um novo usuario => post
delete => Apaga um ususario  => delete 
show => mostra um usuario  => get
update => atualiza um usuario => patch ou put
*/