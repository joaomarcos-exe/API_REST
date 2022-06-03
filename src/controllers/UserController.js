import User from '../models/User';

class UserController {
    async store(req, res){
        try{
            const novoUser = await User.create(req.body);
            return res.json(novoUser)
        }catch(e){
            return res.status(400).json({Erros: e.errors.map(err => err.message)})
        }
    }
    //index
    async index(req, res){
        try{
            const users = await User.findAll();
            return res.json(users)
        }catch(e){
            return res.json(null)
        }
    }
    //show
    async show(req, res){
        try{
            const {id} = req.params;
            const users = await User.findByPk(id);
            return res.json(users)
        }catch(e){
            return res.json(null)
        }
    }
    // Update
    async update(req, res){
        try{
            const {id} = req.params;
            if(!id){
                return res.status(400).json({
                    errors: ['ID invalido']
                })
            }
            const user = await User.findByPk(id);
            if(!user){
                return res.status(400).json({
                    errors: ['Usuario não existe']
                })
            }
            const novosDados = await user.update(req.body)
            return res.json(novosDados)
        }catch(e){
            return res.status(400).json({Erros: e.errors.map(err => err.message)})
        
        }
    }
    //Delete
    async delete(req, res){
        try{
            const {id} = req.params;
            if(!id){
                return res.status(400).json({
                    errors: ['ID invalido']
                })
            }
            const user = await User.findByPk(id);
            if(!user){
                return res.status(400).json({
                    errors: ['Usuario não existe']
                })
            }
            await user.destroy(req.body)
            return res.json(user)
        }catch(e){
            return res.status(400).json({Erros: e.errors.map(err => err.message)})
        
        }
    }
}



export default new UserController();