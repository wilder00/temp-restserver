const {request , response} = require('express')


const postLogin = async (req = request, res = response) => {
  res.json({
    ok: true,
  })
  
  /* const { id, ...rest } = req.body;
  try {
    const role = new Role(rest)
    const savedRole = await role.save()
    res.json({
      role: savedRole
    });
  } catch (error) {
    res.status(400).json({
      error
    })
  } */
}

module.exports = {
  postLogin
}