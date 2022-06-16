const Role = require('../models/role.model');
const User = require('../models/user.model');

const isValidRole = async (role = 'null') => {
  const existRole = await Role.findOne({ where: { roleName: role } });
  if( !existRole ){
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
}

const existEmail = async (email = 'null') => {
  const dbHasEmail = await User.findOne({ where: { email } });
  if( dbHasEmail ){
    throw new Error("El correo ya existe");
  }
}

const existUserWithId = async (userId = 'null') => {
  if(!userId){
    throw new Error(`El id debe ser numérico`);
  }
  const dbHasUser = await User.findByPk(userId);
  if( !dbHasUser ){
    throw new Error(`El id ${userId} no existe`);
  }
}




module.exports = {
  isValidRole,
  existEmail,
  existUserWithId,
}