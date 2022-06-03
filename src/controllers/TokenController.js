import User from '../models/User';
import jwt from 'jsonwebtoken';
import 'dotenv'

class TokenController {
    async store(req, res){
        const {email ='', password} = req.body
        if(!email || !password){
            return res.status(401).json({errors: ['Credencias invalidas']})
        }

        const user = await User.findOne({where: {email}});

        if(!user){
            return res.status(401).json({errors: ['Usuario não existe']})
        }
        if(!(await user.passwordIsValid(password))){
            return res.status(401).json({errors: ['Senha invalida']})

        }
        const {id} = user;
        const token = jwt.sign({id, email}, process.env.TOKEN_SECRETE, {expiresIn: process.env.TOKEN_EXPIRATION})
        res.json({token})

    }
}

export default new TokenController();