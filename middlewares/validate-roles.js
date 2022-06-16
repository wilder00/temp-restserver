
const { request, response } = require('express')

const isAdminRole = ( req = request, res = response, next)=>{

  if(!req.user){
    return res.status(500).json({
      message: 'Se quiere verificar el rol sin validar el token primero'
    })
  }

  const { role , name } = req.user;
  console.log(" VALIDAndo role =========> ", role, name)

  if(role !== 'ADMIN_ROLE'){
    return res.status(401).json({
      message: `${name} no es administrador`
    })
  }

  next();
}


module.exports = {
  isAdminRole
}