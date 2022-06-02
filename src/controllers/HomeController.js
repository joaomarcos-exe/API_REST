import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res){
        const novoAluno = await Aluno.create({
            nome: 'Joselina',
            sobrenome: 'The fores',
            email: 'joselina@hotmail.com',
            idade: 19,
            peso: 70,
            altura: 1.60,
        })
        res.json(novoAluno)
    }
}

export default new HomeController();