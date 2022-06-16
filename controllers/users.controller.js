//para que el editor de código autocomplete mejor
const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');


const getUsers = async (req = request, res = response)=>{
  try {
    const users = await User.findAll();
    
    //obtaining data from query params 
    //const query = req.query;
    const {name, api_key, page=1, quantity=20 } = req.query
    res.json({
      msg: "get API - controller",
      name,
      api_key,
      page: parseInt(page),
      quantity,
      users
    });
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}
const postUser = async(req, res = response)=>{
  
  

  const {name, lastName, email, password, role} = req.body;

  try {
    //const user = new User({ firstName, lastName })
    const user = new User({name, lastName, email, password, role})
    

    //TODO: Encript password
    const salt = bcrypt.genSaltSync(10); // it's the number of laps to reinforce the encryption, by default it's 10
    user.password = bcrypt.hashSync(password, salt);

    //TODO: save user
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo crear el usuario",
      message: error.message,
    })
  }
}
const putUser = async (req, res = response)=>{
  // obtaining data from the url path (it's needed that the path on the route should have /:id, then express will parse)
  const { userId } = req.params;
  const { id, password, google, email, ...rest } = req.body;

  //TODO: Validar id contra base de datos

  if(password){
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt)
  }

  try {
    //User.upsert(rest,{}) 
    const temp = await User.update(rest,{ where: { id: userId } });
    const usr = await User.findByPk(id);
    res.json({
      msg: "correct",
      user: usr
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }

}




const patchUser = (req, res = response)=>{
  res.json({
    msg: "patch API - controller"
  });
}
const deleteUser = (req, res = response)=>{
  res.json({
    msg: "delete API - controller"
  });
}


module.exports = {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
}