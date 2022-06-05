import Sequelize, {Model} from 'sequelize';

export default class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: " ",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 3 a 255 caracteres'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                  len: {
                    args: [3, 255],
                    msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
                  },
                },
              },
            
            email: {
                type: Sequelize.STRING,
                defaultValue: " ",
                unique:{
                    msg: "Email ja registrado"
                },
                validate: {
                    isEmail: {
                        msg: 'Email invalido'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: " ",
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um numero inteiro'
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: " ",
                validate: {
                    isFloat: {
                        msg: 'Peso precisar ser um numero inteiro ou de ponto flutuante'
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: " ",
                validate: {
                    isFloat: {
                        msg: 'Altura precisar ser um numero inteiro ou de ponto flutuante'
                    }
                }
            }
        }, {
            sequelize
        })
        return this;
    }
}