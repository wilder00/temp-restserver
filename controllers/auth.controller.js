const {request , response} = require('express')

const User = require('../models/user.model')

const postLogin = async (req = request, res = response) => {

  const { email, password } = req.body

  try {

    //verify if the email exits

     
    // verify if user is active


    // verify the password 


    // generate JWT

    
  } catch (error) {
    res.status(500).json({
      error
    })
  }

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