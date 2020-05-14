const {UserModel} = require('../models');
const {generateToken,decodedToken} = require('../helpers');
const resolvers = {
    Query:{
        obtenerUsuario: async(_,{token})=>{
            const {_id} = decodedToken(token);
            if(!_id) throw new Error('token invalido');
            const UserExists = await UserModel.findById(_id);
            if(!UserExists) throw new Error('usuario no encontrado');
            return UserExists;
        }
    },
    Mutation:{
        signUp: async(_,{input})=>{
            const {email} = input;
            const usuarioExists = await UserModel.findOne({email});
            if(usuarioExists) throw new Error('email ya registrado');
            const newUser = new UserModel(input);
            return await newUser.save();
        },
        signIn: async(_,{input})=>{
            const {email,password} = input;
            const usuarioExists = await UserModel.findOne({email});
            if(!usuarioExists) throw new Error('email y/o contraseña invalidos');
            if(!usuarioExists.comparePasswords(password)) throw new Error('email y/o contraseña invalidos');
            const token = generateToken(usuarioExists._id);
            return {
                token
            }
        }
    }
}

module.exports = resolvers;