const Role = require('../models/role.model');

const isValidRole = async (role = 'null') => {
  const existRole = await Role.findOne({ where: { roleName: role } });
  if( !existRole ){
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
}

module.exports = {
  isValidRole  
}