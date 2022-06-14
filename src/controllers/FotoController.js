import multer from 'multer'
import multerConfig from "../config/multerConfig";
import Fotos from '../models/Fotos';
const upload = multer(multerConfig).single('foto')
class FotoController {
     store(req, res){
        return  upload(req, res, async(err)=>{
            if(err){
                return res.status(400).json({
                    errors: [err.code]
                })
            }
            const {originalname, filename} = req.file;
            const {aluno_id} = req.body
            const foto = await Fotos.create({originalname, filename, aluno_id})
            return res.json(foto)
        })
    }
}

export default new FotoController();