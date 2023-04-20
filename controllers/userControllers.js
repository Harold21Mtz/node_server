const User = require('../models/user');

module.exports ={
    async getAll(req, res, next) {
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        }catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success:false,
                message:'Error al obtener los usuarios'
            });
        }
    },
    async register(req, res, next) {
        try {
            const user=req.body;
            const data = await User.create(user);
            return res.status(201).json({
                success: true,
                message:"El registro se realizo con exito",
                data:data.id
            });
        }catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json(
                {
                success:false,
                message:'Error al registrar los usuarios',
                error:error
            });
        }
    }
};
    